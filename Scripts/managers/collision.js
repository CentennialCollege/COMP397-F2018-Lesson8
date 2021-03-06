var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        // private instance variables
        // public properties
        // constructor
        // private methods
        // public methods
        Collision.Check = function (object1, object2) {
            if (!object2.IsColliding) {
                var distance = util.Vector2.Distance(object1.Position, object2.Position);
                var totalHeight = object1.HalfHeight + object2.HalfHeight;
                // check if object 1 is colliding with object 2
                if (distance < totalHeight) {
                    object2.IsColliding = true;
                    switch (object2.name) {
                        case "island":
                            var yaySound = createjs.Sound.play("yaySound");
                            yaySound.volume = 0.1;
                            managers.Game.scoreBoard.Score += 100;
                            break;
                        case "cloud":
                            var thunderSound = createjs.Sound.play("thunderSound");
                            thunderSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                        case "enemy":
                            var explosionSound = createjs.Sound.play("explosionSound");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                        case "bullet":
                            explosionSound = createjs.Sound.play("explosionSound");
                            explosionSound.volume = 0.1;
                            managers.Game.scoreBoard.Lives -= 1;
                            break;
                    }
                    if (managers.Game.scoreBoard.Lives <= 0) {
                        managers.Game.currentState = config.Scene.OVER;
                        if (managers.Game.scoreBoard.HighScore <= managers.Game.scoreBoard.Score) {
                            managers.Game.scoreBoard.HighScore = managers.Game.scoreBoard.Score;
                        }
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//# sourceMappingURL=collision.js.map