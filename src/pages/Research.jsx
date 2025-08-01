import React from 'react';
import HPDGNImage from '../assets/images/HPDGN.png';
import aca1Image from '../assets/images/aca1.png';
//import aca2Image from '../assets/images/aca2.png';
import graphmImage from '../assets/images/Graphmining.png';
//import mlImage from '../assets/images/ml.jpg';
import highpImage from '../assets/images/highp.png';
import cogpuImage from '../assets/images/cogpu.png'; 
//import deepLearningImage from '../assets/images/deep_lear.jpg';
import graphpImage from '../assets/images/graphpartitioning.png';
//import genAIImage from '../assets/images/genai.jpg';
//import cyberImage from '../assets/images/cybersecurity.jpg';
import '../styles/style.css'; // Optional if you want to keep it modular

const Research = () => {
  return (
      <div className="container" data-aos="fade-right">
        <h1 className="text-center mb-5 fw-bold">Our Research Areas</h1>
        <div className="row g-4">

          {/* 1.High-Performance Distributed Graph Neural Networks:*/}
          <div className="research-box mb-5">
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <h3>High-Performance Distributed Graph Neural Networks:</h3>
                <p>
                  In this project we focus on developing a framework for high performance graph neural networks on both distributed and single gpu machines.  We design algorithms and runtimes that efficiently utilize memory bandwidth, reduce communication overhead and scale across nodes and GPUs. On single machines, we optimize memory access patterns, sparse matrix operations,and mini-batch pipelines to handle billion-edge graphs. On distributed setups, we introduce intelligent partitioning, overlap of computation and communication, and zero-copy strategies. Our goal is to provide a scalable framework that is both fast and resource-efficient for developing several graph learning applications, such as in recommendation, fraud detection, social network analysis.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src={HPDGNImage} alt="Machine Learning" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>

          {/* 2. Accelerating Graph Analytics using GPUs */}
          <div className="research-box mb-5">
            <div className="row align-items-center flex-md-row-reverse mb-5">
              <div className="col-md-6">
                <h3>Accelerating Graph Analytics using GPUs</h3>
                <p>
                  This project aims to develop a high-performance <b>graph analytical framework</b> to support classical graph analytical algorithms, such as<b> Breadth-First Search (BFS), Single Source Shortest Path (SSSP), Connected Components,</b> and <b> PageRank</b>. These algorithms form the foundation of many graph applications, from social network analysis to bioinformatics. We design frameworks that exploit fine-grained parallelism, memory access patterns, and GPU hardware resources. Our research also focuses on developing efficient linear algebraic operations, such as SpMV and SpMM, for efficient implementation of graph analytics targeting real-word graphs having billion-scale real-world datasets
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src={aca1Image} alt="Deep Learning" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>

          {/* 3.Graph Mining:*/}
          <div className="research-box mb-5">
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <h3>Graph Mining:</h3>
                <p>
                  We explore <b>graph mining techniques</b>  to uncover hidden patterns and structures in large-scale networks. Our research focuses on computing <b>triangles, k-cliques,</b>  and <b>motifs</b>, which are essential for tasks such as community detection, link prediction, and structural analysis. We design parallel and memory-efficient algorithms tailored for multi-core CPUs, GPUs, and distributed systems. Our work helps scale mining operations to graphs with billions of edges, making it feasible to extract insights from real-world domains like social networks, biological systems, and web graphs.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src={graphmImage} alt="Graph Mining" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>

          {/* 4. Graph Partitioning: */}
          <div className="research-box mb-5">
            <div className="row align-items-center flex-md-row-reverse mb-5">
              <div className="col-md-6">
                <h3>Graph Partitioning:</h3>
                <p>
                  Graph partitioning is a crucial step for scaling graph analytics and GNN workloads across multiple compute units. This project aims to develop efficient graph partitioning schemes that minimize edge cuts, balance workload, and optimize memory usage. We evaluate traditional partitioners (like METIS) and develop custom algorithms that are topology-aware and GPU-friendly. Our partitioning schemes are tightly integrated with downstream applications such as distributed training of GNNs and parallel graph traversals. By improving data locality and reducing communication, our methods significantly enhance the efficiency of large-scale graph processing pipelines.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src={graphpImage} alt="Cybersecurity" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
          
          {/* 5. Improving Performance of GPU Architectures: */}
          <div className="research-box mb-5">
            <div className="row align-items-center mb-5">
              <div className="col-md-6">
                <h3>Improving Performance of GPU Architectures:</h3>
                <p>
                  Through this project, we aim to improve the performance of GPU architecture by exploiting on-chip resources efficiently. On-chip resources play a critical role in improving the thread-level-parallelism (TLP), consequently, GPU   throughput.
                </p>
                <p> 
                  On-chip resource management has become extremely complex and has been acting like a switching knob for balancing the two goals of the GPU design: improving throughput and energy efficiency.  Our research aims to address the following two questions:
                </p>  
                  <ol>
                    <li> <b>Can we increase TLP without increasing the on-chip resources?</b> </li>
                    <li> <b>Can we reduce the leakage energy without decreasing the on-chip resources? </b></li>
                  </ol>
                <p>  
                    We design several architectural optimizations to improve the performance of GPU architecture.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src={highpImage} alt="Machine Learning" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>

          {/* 6. Compiler Optimizations for GPU Performance: */}
          <div className="research-box mb-5">
            <div className="row align-items-center flex-md-row-reverse mb-5">
              <div className="col-md-6">
                <h3>Compiler Optimizations for GPU Performance:</h3>
                <p>
                  In this research we focus on improving performance of GPUs by injecting compiler assisted information to the hardware. GPUs, without the knowledge of resource access patterns, often lead to poor resource utilization and lower TLP.  Through this research, we provide elegant compiler optimizations to increase the TLP without raising the on-chip resources. These optimizations significantly improve the performance of several real-life workloads.
                </p>
              </div>
              <div className="col-md-6 text-center">
                <img src={cogpuImage} alt="Deep Learning" className="img-fluid rounded shadow" />
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Research;
