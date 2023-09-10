let items=document.querySelectorAll('.list-group-item');
items[1].style.color='green';
let oddItems=document.querySelectorAll('li:nth-child(odd)');
for(let i=0;i<oddItems.length;i++)
{
    oddItems[i].style.backgroundColor='green';
}
