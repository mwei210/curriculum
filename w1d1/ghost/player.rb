class Player
  # allows name to be read outside the class but not set
  attr_reader :name

  # initialize a player with an instance variable name
  def initialize(name)
    @name = name
  end

  # displays that the move was invalid
  def alert_invalid_move(letter)
    puts "#{letter} is not a valid move!"
    puts "Your guess must be a letter of the alphabet."
    puts "You must be able to form a word starting with the new fragment.\n"
  end

  # prompts the player for a fragment
  # receives the input and takes off the line break and downcases it
  def guess(fragment)
    prompt(fragment)
    gets.chomp.downcase
  end

  def to_s
    name
  end

private

  # prompts player to enter a fragment
  def prompt(fragment)
    puts "The current fragment is '#{fragment}'."
    print "Add a letter: "
  end
end
