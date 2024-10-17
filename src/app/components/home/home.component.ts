import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,  // Declare it as standalone
  imports: [CommonModule],  // Import CommonModule to use directives like ngClass
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  videos = [
    { src: '../../../assets/images/223565_small.mp4', selected: true },
    { src: '../../../assets/images/3718603-hd_1920_1080_25fps.mp4', selected: false },
    { src: '../../../assets/images/4205790-uhd_2880_2160_30fps.mp4', selected: false },
    { src: '../../../assets/images/6010496-uhd_3840_2160_25fps.mp4', selected: false }
  ];

  selectedVideoSrc: string = this.videos[0].src;

  selectVideo(video: { src: string; selected: boolean }): void {
    this.videos.forEach(v => v.selected = false);  // Deselect all videos
    video.selected = true;  // Select the clicked video
    this.selectedVideoSrc = video.src;  // Update the video source
  }
}
