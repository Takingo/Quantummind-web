import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useTranslation } from '../translations/translations';
import './InnovationHub.css';

const InnovationHub = () => {
  const { language } = useLanguage();
  const t = useTranslation(language);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedInnovation, setSelectedInnovation] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    ideaTitle: '',
    shortDescription: '',
    detailedExplanation: '',
    file: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const canvasRef = useRef(null);

  // Track mouse position for particle interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Brain particle animation - ULTIMATE ADVANCED VERSION
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let mouseX = null;
    let mouseY = null;
    let time = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Synapse connection class - lights up when signals pass
    class Synapse {
      constructor(start, end) {
        this.start = start;
        this.end = end;
        this.activity = 0;
        this.pulseActivity = 0;
      }

      activate(strength = 1) {
        this.pulseActivity = Math.min(1, this.pulseActivity + strength);
      }

      update() {
        this.activity *= 0.9;
        this.pulseActivity *= 0.85;
      }

      draw() {
        const alpha = Math.max(this.activity, this.pulseActivity);
        if (alpha < 0.05) return;

        const gradient = ctx.createLinearGradient(this.start.x, this.start.y, this.end.x, this.end.y);
        const color1 = this.start.getColor().replace(')', `, ${alpha})`).replace('hsl', 'hsla');
        const color2 = this.end.getColor().replace(')', `, ${alpha})`).replace('hsl', 'hsla');
        gradient.addColorStop(0, color1);
        gradient.addColorStop(0.5, `rgba(255, 255, 255, ${alpha * 0.6})`);
        gradient.addColorStop(1, color2);
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1 + alpha * 2;
        ctx.beginPath();
        ctx.moveTo(this.start.x, this.start.y);
        ctx.lineTo(this.end.x, this.end.y);
        ctx.stroke();
      }
    }

    // Advanced Neuron class with more states
    class Neuron {
      constructor(targetPoint) {
        this.target = {
          x: targetPoint.x * canvas.width,
          y: targetPoint.y * canvas.height
        };
        this.x = this.target.x + (Math.random() - 0.5) * 100;
        this.y = this.target.y + (Math.random() - 0.5) * 100;
        this.vx = 0;
        this.vy = 0;
        this.layer = targetPoint.layer;
        this.region = targetPoint.region;
        this.size = 2 + Math.random() * 2;
        this.firing = false;
        this.fireTime = 0;
        this.energy = Math.random();
        this.connections = [];
        this.baseHue = this.layer <= 3 ? 180 : 280;
        this.pulseRadius = 0;
      }

      update(mouseX, mouseY, globalTime) {
        // Spring physics
        const dx = this.target.x - this.x;
        const dy = this.target.y - this.y;
        const force = 0.02;
        this.vx += dx * force;
        this.vy += dy * force;
        this.vx *= 0.95;
        this.vy *= 0.95;

        // Breathing effect based on global time
        const breathe = Math.sin(globalTime * 0.02 + this.layer) * 0.5;
        this.vx += breathe * 0.1;
        this.vy += Math.cos(globalTime * 0.03 + this.layer) * 0.1;

        // Mouse interaction - attraction and repulsion
        if (mouseX !== null && mouseY !== null) {
          const mdx = this.x - mouseX;
          const mdy = this.y - mouseY;
          const dist = Math.sqrt(mdx * mdx + mdy * mdy);
          
          if (dist < 200) {
            const force = (200 - dist) / 200;
            if (dist < 100) {
              this.vx += (mdx / dist) * force * 4;
              this.vy += (mdy / dist) * force * 4;
            } else {
              this.vx -= (mdx / dist) * force * 0.5;
              this.vy -= (mdy / dist) * force * 0.5;
            }
            
            if (dist < 80 && Math.random() < 0.15) {
              this.fire();
            }
          }
        }

        // Spontaneous firing with regional waves
        const regionalWave = Math.sin(globalTime * 0.05 + (this.region === 'left' ? 0 : this.region === 'right' ? Math.PI : Math.PI/2));
        if (!this.firing && Math.random() < 0.001 + regionalWave * 0.002) {
          this.fire();
        }

        this.x += this.vx;
        this.y += this.vy;

        // Update firing state
        if (this.firing) {
          this.fireTime++;
          this.pulseRadius = (this.fireTime / 30) * 40;
          if (this.fireTime > 30) {
            this.firing = false;
            this.fireTime = 0;
            this.pulseRadius = 0;
          }
        }

        this.energy += (Math.random() - 0.5) * 0.05;
        this.energy = Math.max(0, Math.min(1, this.energy));
      }

      fire() {
        this.firing = true;
        this.fireTime = 0;
        this.energy = 1;
        
        this.connections.forEach(conn => {
          conn.synapse.activate(0.8);
          const pulse = new ElectricPulse(this, conn.neuron, this.getColor(), conn.synapse);
          pulses.push(pulse);
        });

        brainWaves.push(new BrainWave(this.x, this.y, this.getColor()));
      }

      getColor() {
        const hue = this.baseHue + Math.sin(time * 0.01 + this.layer) * 20;
        const lightness = 50 + this.energy * 20;
        return `hsl(${hue}, 100%, ${lightness}%)`;
      }

      draw() {
        const color = this.getColor();
        
        // Pulse wave when firing
        if (this.firing && this.pulseRadius > 0) {
          const alpha = 1 - (this.fireTime / 30);
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.pulseRadius);
          gradient.addColorStop(0, color.replace(')', ', 0)').replace('hsl', 'hsla'));
          gradient.addColorStop(0.7, color.replace(')', `, ${alpha * 0.4})`).replace('hsl', 'hsla'));
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.pulseRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Glow aura
        const glowSize = 15 + this.energy * 10;
        const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowSize);
        gradient.addColorStop(0, color.replace('50%', '70%'));
        gradient.addColorStop(0.5, color.replace('50%', '40%').replace(')', ', 0.3)').replace('hsl', 'hsla'));
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = this.firing ? '#fff' : color;
        ctx.shadowBlur = this.firing ? 25 : 12;
        ctx.shadowColor = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (this.firing ? 1.8 : 1), 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Energy ring
        if (this.energy > 0.7) {
          ctx.strokeStyle = color.replace(')', ', 0.5)').replace('hsl', 'hsla');
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size + 3 + Math.sin(time * 0.1) * 2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
    }

    // Electric pulse with particle trail
    class ElectricPulse {
      constructor(start, end, color, synapse) {
        this.start = start;
        this.end = end;
        this.progress = 0;
        this.speed = 0.025 + Math.random() * 0.035;
        this.color = color;
        this.synapse = synapse;
        this.particles = [];
        this.arrived = false;
      }

      update() {
        this.progress += this.speed;
        
        if (Math.random() < 0.4) {
          this.particles.push({
            x: this.x,
            y: this.y,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            life: 1,
            size: 1 + Math.random() * 1.5
          });
        }

        this.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.03;
          p.vx *= 0.98;
          p.vy *= 0.98;
        });
        this.particles = this.particles.filter(p => p.life > 0);

        if (this.progress >= 1 && !this.arrived) {
          this.arrived = true;
          if (Math.random() < 0.7) {
            setTimeout(() => this.end.fire(), Math.random() * 100);
          }
          this.synapse.activate(1);
        }

        return this.progress < 1.3;
      }

      get x() {
        return this.start.x + (this.end.x - this.start.x) * Math.min(this.progress, 1);
      }

      get y() {
        return this.start.y + (this.end.y - this.start.y) * Math.min(this.progress, 1);
      }

      draw() {
        this.particles.forEach(p => {
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2);
          gradient.addColorStop(0, this.color.replace(')', `, ${p.life})`).replace('hsl', 'hsla'));
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2);
          ctx.fill();
        });

        if (this.progress < 1) {
          const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, 12);
          gradient.addColorStop(0, '#ffffff');
          gradient.addColorStop(0.2, this.color);
          gradient.addColorStop(0.6, this.color.replace(')', ', 0.4)').replace('hsl', 'hsla'));
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.shadowBlur = 15;
          ctx.shadowColor = this.color;
          ctx.beginPath();
          ctx.arc(this.x, this.y, 12, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    }

    // Brain wave - emanating ripple from active neurons
    class BrainWave {
      constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.maxRadius = 60 + Math.random() * 40;
        this.color = color;
        this.speed = 2 + Math.random();
      }

      update() {
        this.radius += this.speed;
        return this.radius < this.maxRadius;
      }

      draw() {
        const alpha = 1 - (this.radius / this.maxRadius);
        ctx.strokeStyle = this.color.replace(')', `, ${alpha * 0.6})`).replace('hsl', 'hsla');
        ctx.lineWidth = 2 * alpha;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.stroke();
      }
    }

    // Thought burst - when multiple neurons fire together
    class ThoughtBurst {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.particles = [];
        for (let i = 0; i < 20; i++) {
          const angle = (Math.PI * 2 * i) / 20;
          const speed = 2 + Math.random() * 3;
          this.particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            life: 1,
            hue: 180 + Math.random() * 100
          });
        }
      }

      update() {
        this.particles.forEach(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= 0.96;
          p.vy *= 0.96;
          p.life -= 0.02;
        });
        return this.particles.some(p => p.life > 0);
      }

      draw() {
        this.particles.forEach(p => {
          if (p.life <= 0) return;
          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, 4);
          gradient.addColorStop(0, `hsla(${p.hue}, 100%, 70%, ${p.life})`);
          gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
          ctx.fill();
        });
      }
    }

    // Parallax background particles
    class BackgroundParticle {
      constructor(layer) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * (layer * 0.5) + 0.5;
        this.alpha = Math.random() * 0.5;
        this.twinkleSpeed = 0.01 + Math.random() * 0.02;
        this.layer = layer;
        this.vx = (Math.random() - 0.5) * 0.1 * layer;
        this.vy = (Math.random() - 0.5) * 0.1 * layer;
      }

      update(mouseX, mouseY) {
        this.alpha += this.twinkleSpeed;
        if (this.alpha > 0.5 || this.alpha < 0) {
          this.twinkleSpeed *= -1;
        }

        if (mouseX !== null) {
          const offsetX = (mouseX - canvas.width / 2) * 0.001 * this.layer;
          const offsetY = (mouseY - canvas.height / 2) * 0.001 * this.layer;
          this.x += this.vx + offsetX;
          this.y += this.vy + offsetY;
        } else {
          this.x += this.vx;
          this.y += this.vy;
        }

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        const hue = 180 + this.layer * 20;
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create brain structure
    const isMobile = window.innerWidth <= 768;
    const neuronCount = isMobile ? 60 : 120;
    
    const brainPoints = [];
    
    // Left hemisphere
    for (let i = 0; i < neuronCount / 3; i++) {
      const angle = (Math.random() * Math.PI * 1.2) - Math.PI * 0.6;
      const radius = 0.12 + Math.random() * 0.18;
      brainPoints.push({
        x: 0.25 + Math.cos(angle) * radius,
        y: 0.35 + Math.sin(angle) * radius * 0.9,
        layer: Math.floor(Math.random() * 6) + 1,
        region: 'left'
      });
    }
    
    // Corpus callosum
    for (let i = 0; i < neuronCount / 3; i++) {
      brainPoints.push({
        x: 0.5 + (Math.random() - 0.5) * 0.08,
        y: 0.35 + (Math.random() - 0.5) * 0.35,
        layer: Math.floor(Math.random() * 6) + 1,
        region: 'center'
      });
    }
    
    // Right hemisphere
    for (let i = 0; i < neuronCount / 3; i++) {
      const angle = (Math.random() * Math.PI * 1.2) + Math.PI * 0.4;
      const radius = 0.12 + Math.random() * 0.18;
      brainPoints.push({
        x: 0.75 + Math.cos(angle) * radius,
        y: 0.35 + Math.sin(angle) * radius * 0.9,
        layer: Math.floor(Math.random() * 6) + 1,
        region: 'right'
      });
    }

    const neurons = brainPoints.map(point => new Neuron(point));
    const synapses = [];
    const pulses = [];
    const brainWaves = [];
    const thoughtBursts = [];
    const bgParticles = [];

    // Create parallax layers
    for (let layer = 1; layer <= 3; layer++) {
      for (let i = 0; i < 40; i++) {
        bgParticles.push(new BackgroundParticle(layer));
      }
    }

    // Create synaptic connections
    neurons.forEach((neuron, i) => {
      const connectionCount = 2 + Math.floor(Math.random() * 4);
      for (let j = 0; j < connectionCount; j++) {
        const targetIndex = Math.floor(Math.random() * neurons.length);
        if (targetIndex !== i) {
          const target = neurons[targetIndex];
          const dx = neuron.target.x - target.target.x;
          const dy = neuron.target.y - target.target.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 250) {
            const synapse = new Synapse(neuron, target);
            synapses.push(synapse);
            neuron.connections.push({ neuron: target, synapse });
          }
        }
      }
    });

    // Detect thought bursts
    let recentFires = [];
    const checkThoughtBurst = (neuron) => {
      const now = Date.now();
      recentFires.push({ neuron, time: now });
      recentFires = recentFires.filter(f => now - f.time < 500);
      
      if (recentFires.length >= 5) {
        const avgX = recentFires.reduce((sum, f) => sum + f.neuron.x, 0) / recentFires.length;
        const avgY = recentFires.reduce((sum, f) => sum + f.neuron.y, 0) / recentFires.length;
        thoughtBursts.push(new ThoughtBurst(avgX, avgY));
        recentFires = [];
      }
    };

    neurons.forEach(neuron => {
      const originalFire = neuron.fire.bind(neuron);
      neuron.fire = function() {
        originalFire();
        checkThoughtBurst(this);
      };
    });

    // Mouse tracking
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = null;
      mouseY = null;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      time++;
      
      ctx.fillStyle = 'rgba(5, 5, 15, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      bgParticles.forEach(particle => {
        particle.update(mouseX, mouseY);
        particle.draw();
      });

      synapses.forEach(synapse => {
        synapse.update();
        synapse.draw();
      });

      for (let i = brainWaves.length - 1; i >= 0; i--) {
        if (!brainWaves[i].update()) {
          brainWaves.splice(i, 1);
        } else {
          brainWaves[i].draw();
        }
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        if (!pulses[i].update()) {
          pulses.splice(i, 1);
        } else {
          pulses[i].draw();
        }
      }

      for (let i = thoughtBursts.length - 1; i >= 0; i--) {
        if (!thoughtBursts[i].update()) {
          thoughtBursts.splice(i, 1);
        } else {
          thoughtBursts[i].draw();
        }
      }

      neurons.forEach(neuron => {
        neuron.update(mouseX, mouseY, time);
        neuron.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('ideaTitle', formData.ideaTitle);
    formDataToSend.append('shortDescription', formData.shortDescription);
    formDataToSend.append('detailedExplanation', formData.detailedExplanation);
    if (formData.file) {
      formDataToSend.append('file', formData.file);
    }
    formDataToSend.append('type', 'innovation');

    try {
      const response = await fetch('/sendmail.php', {
        method: 'POST',
        body: formDataToSend
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          ideaTitle: '',
          shortDescription: '',
          detailedExplanation: '',
          file: null
        });
        // Reset file input
        const fileInput = document.getElementById('file');
        if (fileInput) fileInput.value = '';
      } else {
        alert(result.message || 'Failed to submit your idea. Please try again or contact us directly at info@quantummind-innovation.com');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting your idea. Please try again or email us directly at info@quantummind-innovation.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="innovation-hub">
      {/* Hero Section with Brain Animation */}
      <section className="hero-innovation">
        <canvas ref={canvasRef} className="brain-canvas"></canvas>
        
        <div className="hero-overlay"></div>
        
        <motion.div
          className="hero-content-innovation"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title-innovation">
            {t.innovation.heroTitle} <span className="text-gradient">{t.innovation.heroTitleHighlight}</span> — {t.innovation.heroSubtitle}
          </h1>
          <p className="hero-subtitle-innovation">
            {t.innovation.heroDesc}
          </p>
          
          <motion.div
            className="scroll-cue"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <span>{t.innovation.scrollCue}</span>
            <div className="scroll-arrow">↓</div>
          </motion.div>
        </motion.div>
      </section>

      {/* Idea Submission Form */}
      <section className="submission-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t.innovation.formTitle} <span className="text-gradient">{t.innovation.formTitleHighlight}</span></h2>
            <p>{t.innovation.formSubtitle}</p>
          </motion.div>

          <motion.div
            className="form-container"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {submitSuccess ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>{t.innovation.successTitle}</h3>
                <p>{t.innovation.successMessage}</p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setSubmitSuccess(false)}
                >
                  {t.innovation.successButton}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="innovation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">{t.innovation.nameLabel} {t.common.required}</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">{t.innovation.emailLabel} {t.common.required}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="form-input"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="ideaTitle">{t.innovation.ideaTitleLabel} {t.common.required}</label>
                  <input
                    type="text"
                    id="ideaTitle"
                    name="ideaTitle"
                    value={formData.ideaTitle}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="shortDescription">{t.innovation.shortDescLabel} {t.common.required}</label>
                  <input
                    type="text"
                    id="shortDescription"
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder={t.innovation.shortDescPlaceholder}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="detailedExplanation">{t.innovation.detailedLabel} {t.common.required}</label>
                  <textarea
                    id="detailedExplanation"
                    name="detailedExplanation"
                    value={formData.detailedExplanation}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="form-textarea"
                    placeholder={t.innovation.detailedPlaceholder}
                  ></textarea>
                </div>

                <div className="form-group">
                  <label htmlFor="file">{t.innovation.fileLabel}</label>
                  <div className="file-upload-wrapper">
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="form-file-input"
                      accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                    />
                    <label htmlFor="file" className="file-upload-button">
                      <span className="file-icon">📎</span>
                      {formData.file ? formData.file.name : t.innovation.fileButton}
                    </label>
                  </div>
                  <p className="file-hint">{t.innovation.fileHint}</p>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-large submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? t.innovation.submitting : t.innovation.submitButton}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Inspiration Section */}
      <section className="inspiration-section section-padding">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t.innovation.featuredTitle} <span className="text-gradient">{t.innovation.featuredTitleHighlight}</span></h2>
            <p>{t.innovation.featuredSubtitle}</p>
          </motion.div>

          <div className="inspiration-grid">
            {/* Quantum-Door Card - Click to expand */}
            <motion.div
              className="inspiration-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedInnovation('quantum-door')}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="system-badge">Quantum-Door System</div>
                <h3>Precision Access. Powered by Quantum Control.</h3>
                <p>Next-generation UWB-based automatic door system with custom board controller and mobile app integration. Click to learn more.</p>
              </div>
            </motion.div>

            {/* Quantum-NFC Card - Click to expand */}
            <motion.div
              className="inspiration-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedInnovation('quantum-nfc')}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="system-badge">Quantum-NFC App</div>
                <h3>Smart Identification. Connected Workforce.</h3>
                <p>Cross-platform NFC solution connecting people, data, and processes — designed for the modern factory. Click to learn more.</p>
              </div>
            </motion.div>

            {/* Production Check App Card - Click to expand */}
            <motion.div
              className="inspiration-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => setSelectedInnovation('production-check')}
              style={{ cursor: 'pointer' }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="system-badge">Production Check App</div>
                <h3>Smart Manufacturing Coordination System</h3>
                <p>Intelligent platform uniting machines, operators, and quality processes across production lines. Click to learn more.</p>
              </div>
            </motion.div>

            {/* Coming Soon Card 1 */}
            <motion.div
              className="inspiration-card coming-soon"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="coming-soon-icon">🚀</div>
                <h3>{t.innovation.comingSoon}</h3>
                <p>{t.innovation.comingSoon1}</p>
              </div>
            </motion.div>

            {/* Coming Soon Card 2 */}
            <motion.div
              className="inspiration-card coming-soon"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="coming-soon-icon">⚡</div>
                <h3>{t.innovation.comingSoon}</h3>
                <p>{t.innovation.comingSoon2}</p>
              </div>
            </motion.div>

            {/* Coming Soon Card 3 */}
            <motion.div
              className="inspiration-card coming-soon"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="coming-soon-icon">💡</div>
                <h3>{t.innovation.comingSoon}</h3>
                <p>{t.innovation.comingSoon3}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Innovation Detail Modal */}
      {selectedInnovation === 'quantum-door' && (
        <div className="innovation-modal" onClick={() => setSelectedInnovation(null)}>
          <motion.div 
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedInnovation(null)}>×</button>
            
            <div className="modal-scroll-container">
              <div className="system-badge-large">Quantum-Door Intelligent System</div>
              
              <h2 className="modal-title">Precision Access. Powered by Quantum Control.</h2>
              <p className="modal-subtitle">A next-generation automation system built around our custom board controller and Quantum App — enabling intelligent, secure, and contactless door management.</p>

              <div className="modal-section">
                <h3>Overview</h3>
                <p>The Quantum-Door Intelligent System combines advanced Ultra-Wideband (UWB) ranging with our custom-designed board controller and companion mobile app.</p>
                <p>As an authorized user carrying a UWB tag approaches, the system detects proximity in real time and triggers door relays with millisecond precision.</p>
                <p>All system parameters — including access distance, user permissions, and activity logs — are fully configurable through the Quantum App.</p>
                <p className="highlight-text">Built for factories, logistics zones, and secure industrial facilities, it delivers automation that’s fast, safe, and fully connected.</p>
              </div>

              <div className="modal-section">
                <h3>Technical Highlights</h3>
                <ul className="technical-list">
                  <li><span className="bullet">•</span> Custom board controller integrated with DW3000 UWB chipset</li>
                  <li><span className="bullet">•</span> Configurable detection zone/distance threshold via Quantum App interface</li>
                  <li><span className="bullet">•</span> Dual relay output for AC/DC control</li>
                  <li><span className="bullet">•</span> Real-time event tracking and device monitoring through the app</li>
                  <li><span className="bullet">•</span> Industrial-grade components: HLK-5M05 power module and Omron G5Q-14 DC5 relays</li>
                  <li><span className="bullet">•</span> Compact 130×46 mm PCB (S-25163 Rev.1), designed for continuous operation</li>
                </ul>
              </div>

              <div className="modal-section">
                <h3>How It Works</h3>
                <div className="workflow-steps">
                  <div className="workflow-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Detection</h4>
                      <p>User with UWB tag approaches within configured detection zone</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Processing</h4>
                      <p>Custom board controller analyzes signal and verifies permissions</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Action</h4>
                      <p>Relay triggers door mechanism with millisecond precision</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Logging</h4>
                      <p>Event recorded in Quantum App with timestamp and user data</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>Key Benefits</h3>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">⚡</div>
                    <h4>Millisecond Response</h4>
                    <p>Ultra-fast UWB detection and relay activation</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🔒</div>
                    <h4>Secure Access</h4>
                    <p>User authentication and permission management</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">📱</div>
                    <h4>Mobile Control</h4>
                    <p>Full configuration via Quantum App interface</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🏭</div>
                    <h4>Industrial Grade</h4>
                    <p>Built for continuous operation in harsh environments</p>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <Link to="/uwb-rtls" className="btn btn-primary" onClick={() => setSelectedInnovation(null)}>
                  Explore UWB Solutions
                </Link>
                <Link to="/contact" className="btn btn-secondary" onClick={() => setSelectedInnovation(null)}>
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Quantum-NFC Modal */}
      {selectedInnovation === 'quantum-nfc' && (
        <div className="innovation-modal" onClick={() => setSelectedInnovation(null)}>
          <motion.div 
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedInnovation(null)}>×</button>
            
            <div className="modal-scroll-container">
              <div className="system-badge-large">Quantum-NFC Intelligent System App</div>
              
              <h2 className="modal-title">Smart Identification. Connected Workforce.</h2>
              <p className="modal-subtitle">A cross-platform NFC solution connecting people, data, and processes — designed for the modern factory.</p>

              <div className="modal-section">
                <h3>Overview</h3>
                <p>The Quantum-NFC Intelligent System App transforms everyday industrial operations into a fully digital experience.</p>
                <p>It runs seamlessly on Web, Android, and iOS, giving both managers and employees real-time visibility and control.</p>
                <p>With personalized dashboards, NFC-based login, and QR code generation, it integrates access control, task management, and analytics into one unified platform.</p>
                <p className="highlight-text">Every interaction — from clock-in to material tracking — is stored in the cloud, creating a transparent and efficient workflow for the entire organization.</p>
              </div>

              <div className="modal-section">
                <h3>Core Functionalities</h3>
                <ul className="technical-list">
                  <li><span className="bullet">•</span> NFC-based identification, login, and access management</li>
                  <li><span className="bullet">•</span> Task (Auftrag) creation, tracking, and live progress updates</li>
                  <li><span className="bullet">•</span> Material management and usage logging</li>
                  <li><span className="bullet">•</span> Absence and leave requests (vacation, sick days) directly in the app</li>
                  <li><span className="bullet">•</span> Performance analytics and time tracking dashboards</li>
                  <li><span className="bullet">•</span> Multi-platform support: Web, Android, iOS</li>
                  <li><span className="bullet">•</span> User-specific customization: interface and permissions adapt per role</li>
                  <li><span className="bullet">•</span> QR code generation for quick access to tasks or devices</li>
                  <li><span className="bullet">•</span> Cloud-connected database (Supabase / Firestore)</li>
                  <li><span className="bullet">•</span> Role hierarchy: Admin, Supervisor, Employee</li>
                  <li><span className="bullet">•</span> Fully compatible with Quantum hardware systems (NFC + UWB)</li>
                </ul>
              </div>

              <div className="modal-section">
                <h3>Platform Architecture</h3>
                <div className="workflow-steps">
                  <div className="workflow-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>User Interface</h4>
                      <p>Responsive web app and native mobile apps (Android/iOS) with role-based dashboards</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>NFC Integration</h4>
                      <p>Seamless employee identification and authentication via NFC tags and readers</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Cloud Backend</h4>
                      <p>Real-time data sync with Supabase/Firestore for instant updates across all devices</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Analytics Engine</h4>
                      <p>Automated reporting and performance tracking with customizable metrics</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>Key Benefits</h3>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">📱</div>
                    <h4>Multi-Platform</h4>
                    <p>Web, Android, and iOS with synchronized data</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">📊</div>
                    <h4>Real-Time Analytics</h4>
                    <p>Live dashboards and performance insights</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">🏭</div>
                    <h4>Integrated Workflow</h4>
                    <p>Tasks, materials, and time tracking in one app</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">☁️</div>
                    <h4>Cloud Connected</h4>
                    <p>Automatic backups and cross-device sync</p>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>User Roles</h3>
                <div className="workflow-steps">
                  <div className="workflow-step">
                    <div className="step-number">👑</div>
                    <div className="step-content">
                      <h4>Admin</h4>
                      <p>Full system control, user management, analytics, and configuration</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">👔</div>
                    <div className="step-content">
                      <h4>Supervisor</h4>
                      <p>Task assignment, team monitoring, and departmental reporting</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">👷</div>
                    <div className="step-content">
                      <h4>Employee</h4>
                      <p>Personal dashboard, task execution, time tracking, and leave requests</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <Link to="/nfc-systems" className="btn btn-primary" onClick={() => setSelectedInnovation(null)}>
                  Discover Quantum-NFC App
                </Link>
                <Link to="/contact" className="btn btn-secondary" onClick={() => setSelectedInnovation(null)}>
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Production Check App Modal */}
      {selectedInnovation === 'production-check' && (
        <div className="innovation-modal" onClick={() => setSelectedInnovation(null)}>
          <motion.div 
            className="modal-content"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={() => setSelectedInnovation(null)}>×</button>
            
            <div className="modal-scroll-container">
              <div className="system-badge-large">Production Check App – Smart Manufacturing Coordination System</div>
              
              <h2 className="modal-title">Smart Manufacturing Coordination System</h2>
              <p className="modal-subtitle">An intelligent manufacturing coordination platform that unites machines, operators, and quality processes across the production line in one digital network.</p>

              <div className="modal-section">
                <h3>Overview</h3>
                <p>Production Check is an intelligent manufacturing coordination platform that unites machines, operators, and quality processes across the production line in one digital network.</p>
                <p>It digitizes every document and process on the factory floor — creating full synchronization between people and machines while providing transparency, efficiency, and real-time insight for modern manufacturing.</p>
                <p className="highlight-text">Built for smart factories, this system transforms traditional production monitoring into a connected, data-driven ecosystem where every shift, every task, and every defect is tracked, analyzed, and optimized in real time.</p>
              </div>

              <div className="modal-section">
                <h3>Key Features</h3>
                <ul className="technical-list">
                  <li><span className="bullet">•</span> <strong>Real-time line monitoring:</strong> Track machine performance, speed, shift output, and downtime with live dashboards</li>
                  <li><span className="bullet">•</span> <strong>Smart fault & maintenance analysis:</strong> Operators log issues, the system detects repeating errors and predicts maintenance needs</li>
                  <li><span className="bullet">•</span> <strong>Digital document control:</strong> Inspection plans, visual guides, and shift reports stored digitally for instant access</li>
                  <li><span className="bullet">•</span> <strong>Performance dashboard:</strong> Real-time shift production counts, efficiency trends, and downtime analytics</li>
                  <li><span className="bullet">•</span> <strong>Device synchronization:</strong> All tablets and terminals on the same line update data simultaneously</li>
                  <li><span className="bullet">•</span> <strong>Flexible configuration:</strong> Customizable per production line or machine type; easily extendable with new analysis modules</li>
                  <li><span className="bullet">•</span> <strong>Cloud-based infrastructure:</strong> Works seamlessly on Web, Android, and iOS, supporting API integration with industrial systems</li>
                </ul>
              </div>

              <div className="modal-section">
                <h3>How It Works</h3>
                <div className="workflow-steps">
                  <div className="workflow-step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h4>Data Collection</h4>
                      <p>Operators input machine status, production counts, and quality checks via tablets or terminals</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h4>Real-Time Sync</h4>
                      <p>Cloud backend synchronizes all devices on the production line instantly</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h4>Smart Analysis</h4>
                      <p>System detects patterns, predicts failures, and generates performance insights</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h4>Actionable Reports</h4>
                      <p>Managers receive automated reports with efficiency metrics and improvement recommendations</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>Key Benefits</h3>
                <div className="benefits-grid">
                  <div className="benefit-card">
                    <div className="benefit-icon">⚙️</div>
                    <h4>Factory Synchronization</h4>
                    <p>All machines and operators connected in real time</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">📈</div>
                    <h4>Predictive Analytics</h4>
                    <p>Detect issues before they become critical failures</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">📋</div>
                    <h4>Digital Documentation</h4>
                    <p>Paperless workflows with instant access to guides</p>
                  </div>
                  <div className="benefit-card">
                    <div className="benefit-icon">💡</div>
                    <h4>Smart Insights</h4>
                    <p>Data-driven decisions with automated reporting</p>
                  </div>
                </div>
              </div>

              <div className="modal-section">
                <h3>Platform Capabilities</h3>
                <div className="workflow-steps">
                  <div className="workflow-step">
                    <div className="step-number">🔄</div>
                    <div className="step-content">
                      <h4>Cross-Device Sync</h4>
                      <p>Web, Android, and iOS apps with unified cloud database</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">🔌</div>
                    <div className="step-content">
                      <h4>API Integration</h4>
                      <p>Connects with existing ERP, MES, and industrial systems</p>
                    </div>
                  </div>
                  <div className="workflow-step">
                    <div className="step-number">🎯</div>
                    <div className="step-content">
                      <h4>Modular Architecture</h4>
                      <p>Add new features and analysis modules without system downtime</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="modal-actions">
                <Link to="/solutions" className="btn btn-primary" onClick={() => setSelectedInnovation(null)}>
                  Explore Smart Manufacturing
                </Link>
                <Link to="/contact" className="btn btn-secondary" onClick={() => setSelectedInnovation(null)}>
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Footer CTA */}
      <section className="footer-cta-innovation">
        <div className="container">
          <motion.div
            className="cta-content-innovation"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{t.innovation.ctaTitle}</h2>
            <Link to="/contact" className="btn btn-primary btn-large">
              {t.innovation.ctaButton}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default InnovationHub;
