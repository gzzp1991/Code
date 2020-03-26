enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

enum Response1 {
  No = 0,
  Yes = 1,
}
function respond(recipient: string, message: Response1): void {}

respond('Princess Caroline', Response1.Yes);

enum E {
  X,
}
enum E1 {
  X,
  Y,
  Z,
}
enum E2 {
  A = 1,
  B,
  C,
}
enum FileAccess {
  // constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // computed member
  G = '123'.length,
}

enum Enum {
  A = 2,
  B = A * 2,
}
