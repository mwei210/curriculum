require "set"
require_relative "player"

class GhostGame

  # declaring constants: the alphabet and the max loss count
  ALPHABET = Set.new("a".."z")
  MAX_LOSS_COUNT = 5

  # dictionary_file = File.readlines('./dictionary.txt')[0..10]

  # initalizing a GhostGame class with a varying number of players
    # a word variable to read in the words from dictionary
    # dictionary instance variable creating a Set from words
    # players instance variable naming players
    # losses instance variable creating a Hash with players as the
    # key and number of losses as the value
  def initialize(*players)
    words = File.readlines("dictionary.txt").map(&:chomp)
    @dictionary = Set.new(words)
    @players = players
    @losses = Hash.new { |losses, player| losses[player] = 0}
  end

  # run method which plays until the game is over and names winner
  def run
    play_round until game_over?
    puts "#{winner} wins!"
  end

  # setting everything private to the class from now on
  private
  # other classes can read these classes but not write to them
  attr_reader :fragment, :dictionary, :losses, :players

  # only true when one player is left
  def game_over?
    remaining_players == 1
  end

  # counts the number of times losses is less than the max in
  # the losses hash
  def remaining_players
    losses.count { |_, v| v < MAX_LOSS_COUNT}
  end

  # sets the fragment instance variable to an empty string
  # welcomes the player
  # until the round is over
    # takes a turn
    # goes to the next player
  # updates the standings
  def play_round
    @fragment = ""
    welcome

    until round_over?
      take_turn
      next_player!
    end

    update_standings
  end

  # clears the system
  # displays a message and the standings
  def welcome
    system("clear")
    puts "Let's play a round of Ghost!"
    display_standings
  end

  # returns whether the fragment is a word
  def round_over?
    is_word?(fragment)
  end

  # returns whether the dictionary includes the fragment
  def is_word?(fragment)
    dictionary.include?(fragment)
  end

  # finds the winner
  def winner
    (player, _) = losses.find { |_, losses| losses < MAX_LOSS_COUNT }
    player
  end

  # clear the system
  # display whose turn it is
  # create a flag variable letter referencing nil
  # until letter is truthy
    # letter equals the current player's guess at the fragment
    # unless a valid play is made with the letter
      # alert the current player with the invalid move
      # reset letter to nil
  # add the letter
  # display that the current player added the letter to the fragment
  def take_turn
    system("clear")
    puts "It's #{current_player}'s turn!"
    letter = nil

    until letter
      letter = current_player.guess(fragment)

      unless valid_play?(letter)
        current_player.alert_invalid_move(letter)
        letter = nil
      end
    end
    add_letter(letter)
    puts "#{current_player} added the letter '#{letter}' to the fragment."
  end

  # labels the first player on the players array as the current_player
  def current_player
    players.first
  end

  # labels the last player on the players array as the previous_player
  def previous_player
    players.last
  end

  # take the players array and rotate players
  # keep rotating until we find a player who has less losses than the max
  def next_player!
    players.rotate!
    players.rotate! until losses[current_player] < MAX_LOSS_COUNT
  end

  # clear the system
  # display that the previous player spelled the fragment
  # display that the previous player gets a letter
  # increment the losses for the previous player by 1
  # if the losses for the previous player equal the max
    # display that the previous player has been eliminated
  # display the standings
  # wait for 2 seconds
  def update_standings
    system("clear")
    puts "#{previous_player} spelled #{fragment}."
    puts "#{previous_player} gets a letter!"

    losses[previous_player] += 1

    if losses[previous_player] == MAX_LOSS_COUNT
      puts "#{previous_player} has been eliminated!"
    end

    display_standings

    sleep(2)
  end

  # returns false unless the letter played is in the alphabet
  # creates a potential fragment with the current fragment and the letter
  # check the dictionary if any words start with the potential fragment
  def valid_play?(letter)
    return false unless ALPHABET.include?(letter)

    potential_fragment = fragment + letter
    dictionary.any? { |word| word.start_with?(potential_fragment)}
  end

  # shovels the letter into fragment
  def add_letter(letter)
    fragment << letter
  end

  # clears the system
  # prints the current standings header
  # for each player in the players array
    # prints the player and their record
  # sleeps for 2 seconds
  def display_standings
    system("clear")
    puts "Current standings:"

    players.each do |player|
      puts "#{player}: #{record(player)}"
    end

    sleep(2)
  end

  # count the number of losses the player has
  # returns the slice of GHOST
  def record(player)
    count = losses[player]
    "GHOST".slice(0, count)
  end
end


if $PROGRAM_NAME == __FILE__
  game = GhostGame.new(Player.new("Gizmo"), Player.new("Breakfast"))
  game.run
end
