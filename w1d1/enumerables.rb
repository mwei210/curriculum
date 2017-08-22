class Array
  def my_each(&prc)
    i = 0
    while i < self.length
      prc.call(self[i])

      i += 1
    end

    self
  end

  def my_select(&prc)
    new_array = []

    self.my_each do |el|
      if prc.call(el)
        new_array << el
      end
    end

    new_array
  end

  def my_reject(&prc)
    new_array = []

    self.my_each do |el|
      unless prc.call(el)
        new_array << el
      end
    end

    new_array
  end

# ???
  def new_reject(&prc)
    self - self.my_select(prc.call)
  end

  def my_any?(&prc)
    self.my_each do |el|
      return true if prc.call(el)
    end
    false
  end

  # a = [1, 2, 3]
  # num == 4
  def my_all?(&prc)
    self.my_each do |el|
      return false if !prc.call(el)
    end

    true
  end

  def my_flatten
    new_arr = Array.new

    self.each_index do |i|
      if self[i].is_a? Array
        # self[i].each_index do |j|
        #   new_arr << self[i][j]
        # end
        new_arr = new_arr + self[i].my_flatten
      else
        new_arr << self[i]
      end
    # i = 0
    # while i < self.length
    #   if !self[i].is_a? Array
    #     el = self[i]
    #     new_arr << el
    #     i += 1
    #   else
    #     self[i].my_flatten
    #     # new_arr << el
    #     # new_arr << self[i].my_flatten
    #     i += 1
    #   end

    end
    new_arr
  end

  def my_zip(*args)
    new_arr = Array.new(self.length) { [] }

    new_arr.each_index do |idx|
      new_arr[idx] << self[idx]
      # p "new_arr here: #{new_arr}"
      args.each do |arg|
        new_arr[idx] << arg[idx]
        # if arg[idx]
        #   new_arr[idx] << arg[idx]
        # else
        #   new_arr[idx] << nil
        # end
      end
    end

    new_arr
  end

  def my_rotate(count = 1)
    abs_rot = count % self.length
    abs_rot.times do |i|
      to_add = self.shift
      self.push(to_add)
    end
    self
  end

  # def my_rotate(count = 1)
  #   letters = ("a".."z").to_a
  #   numbers = (1..26).to_a
  #   to_numbers = Hash[letters.zip(numbers)]
  #   to_letters = Hash[numbers.zip(letters)]
  #   # p alphabet
  #   # p count
  #   # p "self: #{self}"
  #   self.map! do |letter|
  #     # p "letter: #{letter}"
  #     number = to_numbers[letter]
  #     # p number
  #     number + count
  #   end
  #
  #   # p "self after: #{self}" # rotated numbers
  #
  #   self.map! do |number|
  #     letter = to_letters[number]
  #   end
  #
  #   self
  # end

  def my_join(separator = "")
    new_str = ""
    self.each_with_index do |el, idx|
      new_str << el
      # new_str << separator if idx != -1 ????
      new_str << separator if el != self.last
    end
    new_str
  end

  def my_reverse
    new_arr = []
    (self.length - 1).downto(0) do |idx|
      new_arr << self[idx]
    end
    new_arr
  end
end
