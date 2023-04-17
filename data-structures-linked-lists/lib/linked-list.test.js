import LinkedList from './linked-list';

describe('class LinkedList {}', () => {

  describe('new LinkedList(data, next)', () => {

    it('stores a `data` value', () => {
      const list = new LinkedList(8);
      expect(list.data).toEqual(8);
    });

    it('stores a `next` node', () => {
      const list = new LinkedList(8, 9);
      expect(list.next.data).toEqual(9);
    });

    it('requires `data` argument', () => {
      expect(() => {
        new LinkedList(); // eslint-disable-line no-new
      }).toThrow(TypeError, 'the `data` value of a LinkedList cannot be undefined');
    });

    it('allows assignment of a successor', () => {
      const list = new LinkedList(8, 9);
      expect(() => {
        list.next.next = null;
        list.next.next = new LinkedList(10);
      }).not.toThrow();
      expect(() => {
        list.next.next = 'sus';
      }).toThrow(TypeError, 'the `next` node in a linked list must be a LinkedList object');
    });

    it('prints its value and those of its successors in-order', () => {
      const list = new LinkedList(8, 9, 10);
      expect(list.print()).toEqual('LinkedList { 8 <- 9 <- 10 }');
    });

  });

});
