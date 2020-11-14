class myStack
{
    object;
    n;

    constructor(){
        this.n = 0;
        this.object = [];
    };


    push_back = (value)=>{
        this.n++;
        this.object[this.n-1] = value;
        
    };


    pop = ()=>{
        this.n = this.n - 1;
    }

    top = ()=>{
        return this.object[this.n-1];
    }
};

export default myStack;