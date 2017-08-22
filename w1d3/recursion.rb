require 'byebug'

def recursive_range(start, finish)
  return [] if finish <= start
  return [start] if start == finish - 1
  [start] + recursive_range(start+1, finish)
end

def recursive_sum(arr)
  return arr.first if arr.length <= 1
  arr.first + recursive_sum(arr[1..-1])
end

def iterative_sum(arr)
  arr.reduce(:+)
end

def exponent_v1(base, power)
  return 1 if power.zero?
  base * exponent_v1(base, power - 1)
end

def exponent_v2(base, power)
  return 1 if power.zero?
  return base if power == 1
  odd_path = exponent_v2(base, (power - 1) / 2)
  even_path = exponent_v2(base, (power / 2))
  if power.odd?
    base * (odd_path * odd_path)
  else
    even_path * even_path
  end
end


class Array
  def dd_map
    map { |el| el.is_a?(Array) ? el.dd_map : el }
  end
end


def rec_fib(num)
  return [] if num == 0
  return [0] if num == 1
  return [0, 1] if num == 2
  rec_fib(num - 1) + [rec_fib(num - 1).last + rec_fib(num - 2).last]
end

def it_fib(num)
  result = []

  num.times do |i|
    if i.zero?
      result << 0
    elsif i == 1
      previous = result.last
      result << previous + i
    else
      result << result.last + result[-2]
    end
  end
  result
end

def subsets(array, result = [])
  return [result] if array.empty?
  subsets(array[0..-2]) + subsets(array[0..-2]).each { |arr| arr << array.last }
end

def factorial(n)
  return 1 if n == 1
  n * factorial(n - 1)
end

# def permutations(array)
#   return array if array.length <= 1
#
#   factorial(array.length).times do |el|
#     permutations(array[0..-2]).each do |item|
#       item << array.last
#     end
#   end
# end

def bsearch(arr, target)
  pivot = arr.length / 2
  return nil if arr.length == 1 && arr[0] != target
  return pivot if target == arr[pivot]
  left = arr[0..pivot]
  right = arr[pivot..-1]
  if target > pivot
    index = bsearch(right, target)
    index ? pivot + index : nil
  else target < pivot
    bsearch(left, target)
  end
end


def merge_sort(arr)
  return arr if arr.length <= 1
  half = arr.length / 2
  left = arr[0..half]
  right = arr[half..-1]
  merge(merge_sort(left), merge_sort(right))

end

def merge(left, right)
  merged = []
  #until left.empty? && right.empty?
    case left[0] <=> right[0]
    when 1
      merged << left[0]
      left.shift
    when -1
      merged << right[0]
      right.shift
    when 0
      merged << left[0]
      left.shift
    end
  #end
  merged
end
