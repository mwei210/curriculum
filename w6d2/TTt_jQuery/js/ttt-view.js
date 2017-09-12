class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.makeMove = this.makeMove.bind(this);
    this.bindEvents();
  }

  bindEvents() {
    const $li = $("li");
    $li.on("click", this.makeMove);
  }

  makeMove(event) {
    const $square = $(event.currentTarget);
    $square.append(this.game.currentPlayer);
    $square.addClass(this.game.currentPlayer);
    $square.removeClass("hovered");
    $square.addClass("clicked");
    $square.off();
    $square.on("click", () => alert("Invalid move!"));
    this.game.playMove($square.data("pos"));
    if (this.game.isOver()){
      const $allSquares = $("li");
      $allSquares.removeClass("base clicked");
      $allSquares.addClass("leftover");
      $allSquares.off();
      const $winnerSquares = $(`.${this.game.winner()}`);
      $winnerSquares.addClass("winner");
      const $loserSquares = $(`.${this.game.currentPlayer}`);
      $loserSquares.addClass("loser");
      $("body").append(`<h2>You win, ${this.game.winner()}</h2>`);
    }
  }

  setupBoard() {
    const $ul = $("<ul>");
    $ul.css("width", "300px");
    this.$el.append($ul);
    for (let x = 0; x < 3; x++) {
      for (let y = 0; y < 3; y++) {
        const pos = [x, y];
        const $li = $("<li>");
        $li.data("pos", pos);
        $li.on("mouseover", function() {
          $li.removeClass("base");
          $li.addClass("hovered");
        });
        $li.on("mouseout", function() {
          $li.removeClass("hovered");
          $li.addClass("base");
        });
        $li.addClass("base");
        $ul.append($li);
      }
    }
  }
}

module.exports = View;
