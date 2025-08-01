//import img1 from '../assets/images/project1.jpg';
//import img2 from '../assets/images/project2.jpg';
import imag1 from '../assets/images/proj1.png';
import imag2 from '../assets/images/proj2.png';
import imag3 from '../assets/images/proj3.png';
//import img3 from '../assets/images/project3.jpg';

//import img4 from '../assets/images/project4.jpg';
//import img5 from '../assets/images/project5.jpg';
//import img6 from '../assets/images/project6.jpg';

const projects = [
  {
    id: 1,
    title: "A High-Performance and Memory Efficient Graph Analytical Framework for GPUs",
    shortDesc: "Graphics Processing Units (GPUs), due to their computing capabilities, have been widely adopte...",
    image: imag1,
    status: "Completed",
    funding: "Funding: 29.6 Lakh",
    date: "Jan 2024 - Present",
    report: "https://example.com/report1.pdf",
    // ✅ funding  Section
    fundingDetails: {
      amount: "Rs. 29,67,830 lakhs",
      agency: "Science and Engineering Research Board (SERB)",
      scheme: "Start-up Research Grant (SERB)",
      duration: "24 months (Completed)"
    },
    // ✅ Details Section
    detailsIntro: 
      "Graphics Processing Units (GPUs), due to their computing capabilities, have been widely adopted across various domains. They are not only adopted for graphics applications but also for various general-purpose data-parallel applications. In the past decade, they have also been exploited to accelerate applications in the graph analytics domain. Even though graph analytical applications exhibit parallelism, improving their performance on the GPU architectures is hard. This is because:",
    detailsPoints: [
      "graph processing is irregular in nature",
      "GPUs follow single instruction multiple data (SIMD) execution models. ",
      "Moreover, GPUs offer very limited memory (i.e., < 100 GB); hence, we can not process the real-world graph inputs using the capacity of a single GPU memory. Executing them on multiple GPUs incurs additional storage and computational overhead."
    ],
    detailsConclusion:"To address these, we propose a high-performance and memory efficient graph analytical framework for GPUs. The framework is targeted to improve the performance of graph analytical applications by addressing load imbalance problems that occur with the irregular nature of graphs. The framework exploits the GPU unified memory that can help in processing very large inputs even with a single GPU. The framework will also provide a programming runtime that helps the programmers to develop other graph analytical applications efficiently with a minimal programming effort.",
  },
  {
    id: 2,
    title: "Pre-Failure Alert Generation for Equipment & Cobble Reduction Based on Data Analytics and Video Analytics at BRM",
    shortDesc: "Rolling process at Bar and Rod Mill (BRM) is a continuous process where the same...",
    image: imag2,
    status: "Ongoing",
    funding: "Funding: 299 Lakh",
    date: "Jan 2024 - Present",
    report: "#",
    // ✅ funding  Section
    fundingDetails: {
      amount: "Rs. 299 Lakh",
      role: "PI",
      agency: "Bhilai Steel Plant (BSP)",
      //scheme: "",
      duration: "18 months"
    },
    // ✅ Details Section
    detailsIntro: 
      "Rolling process at Bar and Rod Mill (BRM) is a continuous process where the same metal is simultaneously processed at different stands, fast finishing blocks and other equipment. Any cobble/failure at any of the equipment can be the result of any abnormality in upstream or downstream equipment along with the equipment where it occurs. It could be the effect of any abnormal behavior in the previously rolled metal. Thus, it is important to incorporate the data analytic in BRM so that operators can interpret key insights in real time and, as a result, prevent critical failures. These insights are difficult to be drawn by the operators themselves, in real time, in view of vastness of process data, speed of the process, complexity in correlation of process data & its derivatives with quality & productivity, etc. The said insights are expected to help in boosting productivity, increasing the level of integration, while saving energy and costs with enhanced safety of the people and assets.",
    detailsConclusion:
      "To the best of our knowledge, there are no off-the shelf solutions available to analyze the data acquired from the existing “Fast Data Acquisition (IBA)”, prevent critical failure. Also, we noticed that the operation of the mill can also be monitored using video of the entire operation to predict the abnormalities. Hence, in this project, we develop 3 and implement a system to analyze video streams captured from various cameras and data captured using the IBA system of the BRM process and correlate with various failures such as cobbles and their location in the mill."
  },
  {
    id: 3,
    title: " A High-Performance and Memory-Efficient Deep Learning Framework for GPUs",
    shortDesc: "Deep learning (DL) has gained significant momentum in recent years to solve many complex...",
    image: imag3,
    status: "Ongoing",
    funding: "Funding: 11.8 Lakh",
    date: "Apr 2023 - Dec 2024",
    report: "#",
    // ✅ funding  Section
    fundingDetails: {
      amount: "Rs. 11,80,000 lakh",
      agency: "Indian Institute of Technology (IIT) Bhilai",
      scheme: "Research Initiation Grant",
      duration: "36 months"
    },
    detailsIntro:
      "Deep learning (DL) has gained significant momentum in recent years to solve many complex problems in various domains. However, DL techniques require a tremendous amount of compute power. Over the past decade, researchers have been exploiting accelerators like Graphics Processing Units (GPUs) to meet the computing power demands. However, GPUs are equipped with very low memory, which becomes an obstacle to process large data sets. In this project, we propose a framework to address the key issues in the deep neural network: compute power and memory.",
    detailsConclusion: 
      "To address both the limitations, we propose a high-performance memory-efficient deep neural network for GPU. The framework uses a distributed decentralized architecture consisting of compute nodes. We propose three major components in the framework: memory manager, compute unit, and synchronization unit. The memory manager is targeted to improve the memory efficiency of each compute node in the distributed cluster. It uses both static and dynamic analysis techniques to improve the storage occupancy of each node. The compute unit is responsible for improving the performance of each node. It provides an efficient implementation of the SpMM operation by exploiting the GPU resources in an efficient manner. Finally, in the synchronization unit, we propose a Bulk Asynchronous Parallel (BASP) scheme that tries to reduce the synchronization overhead by switching between the synchronous and asynchronous execution schemes."
  },
  /* Uncomment if you have more projects
  SAMPLES ADDED IN THIS FILE
  {
    id: 4,
    title: "A High-Performance and Memory Efficient Graph Analytical Framework for GPUs",
    shortDesc: "Graphics Processing Units (GPUs), due to their computing capabilities, have been widely adopte...",
    image: img4,
    status: "Completed",
    funding: "Funding: 29.6 Lakh",
    date: "Jan 2024 - Present",
    report: "https://example.com/report1.pdf",
    // ✅ funding  Section
    fundingDetails: {
      amount: "Rs. 29,67,830 lakhs",
      agency: "Science and Engineering Research Board (SERB)",
      scheme: "Start-up Research Grant (SERB)",
      duration: "24 months (Completed)"
    },
    // ✅ Details Section
    detailsIntro: 
      "Graphics Processing Units (GPUs), due to their computing capabilities, have been widely adopted across various domains. They are not only adopted for graphics applications but also for various general-purpose data-parallel applications. In the past decade, they have also been exploited to accelerate applications in the graph analytics domain. Even though graph analytical applications exhibit parallelism, improving their performance on the GPU architectures is hard. This is because:",
    detailsPoints: [
      "graph processing is irregular in nature",
      "GPUs follow single instruction multiple data (SIMD) execution models. ",
      "Moreover, GPUs offer very limited memory (i.e., < 100 GB); hence, we can not process the real-world graph inputs using the capacity of a single GPU memory. Executing them on multiple GPUs incurs additional storage and computational overhead."
    ],
    detailsConclusion:"To address these, we propose a high-performance and memory efficient graph analytical framework for GPUs. The framework is targeted to improve the performance of graph analytical applications by addressing load imbalance problems that occur with the irregular nature of graphs. The framework exploits the GPU unified memory that can help in processing very large inputs even with a single GPU. The framework will also provide a programming runtime that helps the programmers to develop other graph analytical applications efficiently with a minimal programming effort.",
  },
  {
    id: 5,
    title: "A High-Performance and Memory Efficient Graph Analytical Framework for GPUs",
    shortDesc: "Graphics Processing Units (GPUs), due to their computing capabilities, have been widely adopte...",
    image: img5,
    status: "Completed",
    funding: "Funding: 29.6 Lakh",
    date: "Jan 2024 - Present",
    report: "https://example.com/report1.pdf",
    // ✅ funding  Section
    fundingDetails: {
      amount: "Rs. 29,67,830 lakhs",
      agency: "Science and Engineering Research Board (SERB)",
      scheme: "Start-up Research Grant (SERB)",
      duration: "24 months (Completed)"
    },
    // ✅ Details Section
    detailsIntro: 
      "Graphics Processing Units (GPUs), due to their computing capabilities, have been widely adopted across various domains. They are not only adopted for graphics applications but also for various general-purpose data-parallel applications. In the past decade, they have also been exploited to accelerate applications in the graph analytics domain. Even though graph analytical applications exhibit parallelism, improving their performance on the GPU architectures is hard. This is because:",
    detailsPoints: [
      "graph processing is irregular in nature",
      "GPUs follow single instruction multiple data (SIMD) execution models. ",
      "Moreover, GPUs offer very limited memory (i.e., < 100 GB); hence, we can not process the real-world graph inputs using the capacity of a single GPU memory. Executing them on multiple GPUs incurs additional storage and computational overhead."
    ],
    detailsConclusion:"To address these, we propose a high-performance and memory efficient graph analytical framework for GPUs. The framework is targeted to improve the performance of graph analytical applications by addressing load imbalance problems that occur with the irregular nature of graphs. The framework exploits the GPU unified memory that can help in processing very large inputs even with a single GPU. The framework will also provide a programming runtime that helps the programmers to develop other graph analytical applications efficiently with a minimal programming effort.",
  },
  {
    id: 6,
    title: "A High-Performance and Memory Efficient Graph Analytical Framework for GPUs",
    shortDesc: "Graphics Processing Units (GPUs), due to their computing capabilities, have been widely adopte...",
    image: img6,
    status: "Completed",
    funding: "Funding: 29.6 Lakh",
    date: "Jan 2024 - Present",
    report: "https://example.com/report1.pdf",
    // ✅ funding  Section
    fundingDetails: {
      amount: "Rs. 29,67,830 lakhs",
      agency: "Science and Engineering Research Board (SERB)",
      scheme: "Start-up Research Grant (SERB)",
      duration: "24 months (Completed)"
    },
    // ✅ Details Section
    detailsIntro: 
      "Graphics Processing Units (GPUs), due to their computing capabilities, have been widely adopted across various domains. They are not only adopted for graphics applications but also for various general-purpose data-parallel applications. In the past decade, they have also been exploited to accelerate applications in the graph analytics domain. Even though graph analytical applications exhibit parallelism, improving their performance on the GPU architectures is hard. This is because:",
    detailsPoints: [
      "graph processing is irregular in nature",
      "GPUs follow single instruction multiple data (SIMD) execution models. ",
      "Moreover, GPUs offer very limited memory (i.e., < 100 GB); hence, we can not process the real-world graph inputs using the capacity of a single GPU memory. Executing them on multiple GPUs incurs additional storage and computational overhead."
    ],
    detailsConclusion:"To address these, we propose a high-performance and memory efficient graph analytical framework for GPUs. The framework is targeted to improve the performance of graph analytical applications by addressing load imbalance problems that occur with the irregular nature of graphs. The framework exploits the GPU unified memory that can help in processing very large inputs even with a single GPU. The framework will also provide a programming runtime that helps the programmers to develop other graph analytical applications efficiently with a minimal programming effort.",
  },
  */
];

export default projects;
