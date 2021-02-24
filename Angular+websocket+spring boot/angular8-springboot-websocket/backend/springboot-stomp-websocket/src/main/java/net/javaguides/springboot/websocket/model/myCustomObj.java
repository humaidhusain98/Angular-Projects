package net.javaguides.springboot.websocket.model;

public class myCustomObj 
{
	String id;
	String name;
	String mobile;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobile() {
		return mobile;
	}
	public void setMobile(String mobile) {
		this.mobile = mobile;
	}
	public myCustomObj(String id, String name, String mobile) {
		super();
		this.id = id;
		this.name = name;
		this.mobile = mobile;
	}
	@Override
	public String toString() {
		return "myCustomObj [id=" + id + ", name=" + name + ", mobile=" + mobile + "]";
	}
	
	
	
	

}
