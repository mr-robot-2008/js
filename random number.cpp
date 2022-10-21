#include <iostream>
using namespace std;
int main ()
{
	
	int *num=nullptr;
	num=new int [5];
	
	for (int i=0;i<5;i++)
	{
		num[i]=rand()%6;
	}
	cout<<"random numbers are";
	for (int i=0;i<5;i++)
	{
		cout<<num[i];
		cout<<endl;
	}
	
}