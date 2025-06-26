import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'main-banner',
  imports: [CommonModule],
  templateUrl: './main-banner.html',
  styleUrl: './main-banner.css'
})
export class MainBanner {
aboutCards=[
  {
    title:" Professional & Visionary",
    description:`We deliver next-generation products and services across multiple dimensions, leveraging advanced technologies and AI integration. Our strength lies in a culture enabling us to build smart solutions for a rapidly evolving world.`
  },
  {
    title:"Tech-Focused",
    description:`With a deep focus on innovation, NDMatrix offers AI-driven and tech-enabled products across multiple domains. Our team blends cutting-edge technology with strong vision and agile culture to deliver impactful, scalable solutions.`
  },
  {
    title:" Creative & Forward Thinking",
    description:`At NDMatrix, we don't just build products, we create experiences powered by AI and advanced tech. Across various industries and dimensions, we combine creative thinking, and intelligent design  into the future.`
  }
]

}
