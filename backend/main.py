from fastapi import FastAPI, HTTPException
import uvicorn
from pydantic import BaseModel
from typing import List, Dict, Optional


app = FastAPI()

class Post(BaseModel):
    id: int
    title: str
    content: str
    author: str
    images: List[str] = []
    published: bool = False
    


posts = [
    {
        "id": 0,
        "title": "Welcome to My Blog",
        "content": "This is my first post using FastAPI and React!",
        "author": "a",
        "images": ["https://example.com/image1.jpg"],
        "published": True
    },
    {
        "id": 1,
        "title": "Why FastAPI is Awesome",
        "content": "FastAPI is fast, intuitive, and Pythonic. Here's why I love it...",
        "author": "a",
        "images": ["https://example.com/fastapi.png"],
        "published": True
    },
    {
        "id": 2,
        "title": "Unpublished Draft",
        "content": "This is a draft version of a blog post.",
        "author": "a",
        "images": [],
        "published": False
    }
]



@app.get("/")
def root():
    return {"hello":"monkey"}

@app.get("/posts/{post_id}", response_model=Post)
def get_post(post_id : int):
    if post_id < len(posts):
        return posts[post_id]   
    else:
        raise HTTPException(status_code=404, detail="Item not found")