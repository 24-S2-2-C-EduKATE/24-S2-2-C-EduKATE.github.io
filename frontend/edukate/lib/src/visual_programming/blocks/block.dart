abstract class Block {
  final int id; // Block ID
  // String opcode; // Identifier for the block type.
  // Map<String, dynamic> inputs; //Inputs to this block and the blocks they point to.
  // Map<String, dynamic> fields; // Fields on this block and their values.
  // Block? next; //Next block in the stack, if one exists.
  // bool topLevel; // If this block starts a stack.
  // int? parent; // Parent block ID, if available.
  // int x; //x position of script, if top-level
  // int y; //y position of script, if top-level

  Block({required this.id});

 
}