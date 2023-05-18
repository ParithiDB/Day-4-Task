function oddNum(a)
{
	for(let i = 0; i<a.length; i++)
  {
  		if(a[i] % 2 != 0)
      {
      		console.log( a[i]);
      }
  }
}

oddNum([3,7,3,5,2,8,5,2,3,4,6,33,43,23,46]);
