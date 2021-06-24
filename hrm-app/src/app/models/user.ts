export class user {

    _id:String;
    imageUrl:String;
    first_name:String;
    last_name:String;
    designation:String;
    email:String;
    mobile:String;
    role:Number;
   
 
    constructor(_id:String,
        imageUrl:String,
    first_name:String,
    last_name:String,
    designation:String,
    email:String,
    mobile:String,
    role:Number,

        ){
        this._id=_id;
        this.imageUrl = imageUrl;
        this.first_name=first_name;
        this.last_name=last_name;
        this.designation=designation;
        this.email=email;
        this.mobile=mobile;
        this.role=role;
    }
 
 

}