import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Storage, ref, uploadBytes, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private readonly firestore: Firestore, private readonly storage: Storage) {}

  getBlogs() {
    const blogsCollection = collection(this.firestore, 'blogs');
    return collectionData(blogsCollection);
  }

  addBlog(data: any) {
    const blogsCollection = collection(this.firestore, 'blogs');
    return addDoc(blogsCollection, data);
  }

  async uploadImage(file: File) {
    const storageRef = ref(this.storage, `wedding-images/${file.name}`);
    await uploadBytes(storageRef, file);
    return getDownloadURL(storageRef);
  }
}
