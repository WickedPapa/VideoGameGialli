package com.projectwork.videogamelover.model.entities;

import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;

@Entity
public class Category {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;
	private String descriptor;
	@ManyToMany
	private List<Insertion> list;
	
	public Category() {
		super();
	}
	
	
	public Category(String descriptor, List<Insertion> list) {
		super();
		this.descriptor = descriptor;
		this.list = list;
	}


	public Category(int id, String descriptor, List<Insertion> list) {
		super();
		this.id = id;
		this.descriptor = descriptor;
		this.list = list;
	}


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


	public String getDescriptor() {
		return descriptor;
	}


	public void setDescriptor(String descriptor) {
		this.descriptor = descriptor;
	}


	public List<Insertion> getList() {
		return list;
	}


	public void setList(List<Insertion> list) {
		this.list = list;
	}


	@Override
	public String toString() {
		return "Category [id=" + id + ", descriptor=" + descriptor + ", list=" + list + "]";
	}
	
	
}
