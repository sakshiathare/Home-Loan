import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  ngOnInit(): void {
    this.initFAQAccordion();
    this.initCategoryFilter();
  }

  initFAQAccordion(): void {
    const questions = document.querySelectorAll('.faq-question');
    
    questions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling as HTMLElement;
        const isOpen = question.classList.contains('active');
        
        // Close all other questions
        questions.forEach(q => {
          if (q !== question) {
            q.classList.remove('active');
            (q.nextElementSibling as HTMLElement).classList.remove('show');
          }
        });
        
        // Toggle current question
        question.classList.toggle('active');
        answer.classList.toggle('show');
      });
    });
  }

  initCategoryFilter(): void {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const faqItems = document.querySelectorAll('.faq-item');
    
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter FAQs
        faqItems.forEach(item => {
          const itemCategory = item.getAttribute('data-category');
          
          if (category === 'all' || itemCategory === category) {
            (item as HTMLElement).style.display = 'block';
          } else {
            (item as HTMLElement).style.display = 'none';
          }
        });
      });
    });
  }
}