import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../../service/post.service';
import { PostUser } from '../../../models/PostUser';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  postForm: FormGroup;

  constructor(private fb: FormBuilder, private postService: PostService,private router: Router) {
    this.postForm = this.fb.group({
      name: ['', Validators.required],
      lieux: ['', Validators.required],
      tlf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      content: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Vous pouvez ajouter des initialisations supplémentaires ici si nécessaire
    this.postForm.patchValue({
      name: 'Name',
      lieux: 'Lieux',
      tlf: 216, // Exemple de numéro de téléphone par défaut
      email: 'example@email.com', // Exemple d'e-mail par défaut
      content: ' Content'
    });
  
    // Vous pouvez également écouter les changements dans les champs du formulaire
    // et réagir en conséquence si nécessaire, par exemple pour valider en temps réel
    // ou pour effectuer des actions en réponse aux modifications des champs.
    this.postForm.valueChanges.subscribe((value) => {
      // Exemple de traitement en réponse aux changements de valeur du formulaire
      console.log('Form value changed:', value);
    });
  }

  onSubmit() {
    if (this.postForm.valid) {
      const formData = this.postForm.value;
  
      // Création de l'objet conforme à PostUser sans 'tlf'
      const newPost: PostUser = {
        id: 0, // ou null, selon ce que votre backend attend
        name: formData.name,
        content: formData.content,
        lieux: formData.lieux,
        email: formData.email,
        postedby: 'Anonymous',
        date: new Date(),
        likeCount: 0,
        viewCount: 0,
        tags: []
      };
      
  
      this.postService.createPost(newPost).subscribe(
        (response: PostUser) => {
          console.log('Post created successfully', response);
          this.postForm.reset();
          this.router.navigate(['/view-post']);
        },
        error => {
          console.error('Error creating post', error);
        }
      );
    } else {
      console.log('Form is not valid');
    }
  }
  
}

