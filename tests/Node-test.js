import { expect } from 'chai';
import Node from '../scripts/Node.js';

describe("Node", () => {

  beforeEach(() => {
    let node = new Node('node name');
  })

  it('should have a prefixes property that starts at 0', () => {
    node.prefixes = 0;
  })
})
