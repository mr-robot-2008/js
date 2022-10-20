//Given a linked list of 0s, 1s and 2s, sort it.
// https://practice.geeksforgeeks.org/problems/given-a-linked-list-of-0s-1s-and-2s-sort-it/1

/*
 
  Node is defined as
  struct Node {
    int data;
    struct Node *next;
    Node(int x) {
        data = x;
        next = NULL;
    }
};

*/
class Solution
{
    public:
    //Function to sort a linked list of 0s, 1s and 2s.
    Node* segregate(Node *head) {
        int zero=0,one=0,two=0;
        // Add code here
        Node* temp=head;
        while(temp){
            if(temp->data==0) zero++;
            if(temp->data==1) one++;
            else two++;
            temp=temp->next;
        }
        temp=head;
        while(temp){
            if(zero){
                temp->data=0;
                zero--;
            }
            else if(one){
                temp->data=1;
                one--;
            }
            else{
                temp->data=2;
                two--;
            }
            temp=temp->next;
        }
        return head;
    }
};