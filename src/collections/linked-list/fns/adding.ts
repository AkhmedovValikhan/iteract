import { LinkedListNode } from "../LinkedListNode";
import { LinkedList } from "../LinkedList";

export function addHeadNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    internalAddHeadNode(list, node);
}

export function addTailNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    internalAddTailNode(list, node);
}

export function addHead<TValue>(list: LinkedList<TValue>, value: TValue) {
    const node = new LinkedListNode(value, list);
    internalAddHeadNode(list, node);
}

export function addTail<TValue>(list: LinkedList<TValue>, value: TValue) {
    const node = new LinkedListNode(value, list);
    internalAddTailNode(list, node);
}

function internalAddHeadNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    if (!list.head) {
        // Handle empty list
        internalAddNodeToEmptyList(list, node);
        return;
    }
    list.head.prev = node;
    node.next = list.head;
    list.head = node;
}

function internalAddTailNode<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    if (!list.head) {
        // Handle empty list
        internalAddNodeToEmptyList(list, node);
        return;
    }
    list.tail.next = node;
    node.prev = list.tail;
    list.tail = node;
}

function internalAddNodeToEmptyList<TValue>(list: LinkedList<TValue>, node: LinkedListNode<TValue>) {
    list.head = node;
    list.tail = node;
}