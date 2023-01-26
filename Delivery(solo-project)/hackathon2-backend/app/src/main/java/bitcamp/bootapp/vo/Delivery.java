package bitcamp.bootapp.vo;

public class Delivery {

	public int no;
	public long trackingNo;
	public int tel;
	public String name;
	public String addr;
	public String msg;
	public int paym;
	public int status;


	public int getPaym() {
		return paym;
	}
	public void setPaym(int paym) {
		this.paym = paym;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String createdDate;

	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}

	public long getTrackingNo() {
		return trackingNo;
	}
	public void setTrackingNo(long trackingNo) {
		this.trackingNo = trackingNo;
	}
	public int getTel() {
		return tel;
	}
	public void setTel(int tel) {
		this.tel = tel;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	public String getCreatedDate() {
		return createdDate;
	}
	public void setCreatedDate(String createdDate) {
		this.createdDate = createdDate;
	}

}
