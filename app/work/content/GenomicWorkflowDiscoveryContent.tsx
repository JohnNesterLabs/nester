import styles from "../../page.module.css";

export default function GenomicWorkflowDiscoveryContent() {
    return (
      <>
       
        <h3 className={styles.workDetailSubheading}>Overview</h3>
        <p className={styles.workDetailParagraph}>
        This project focuses on designing an agentic application for Basepair, a modern genomics platform that transforms next generation sequencing analysis into an intuitive point and click experience.Built on secure, scalable cloud infrastructure with GPU accelerated workflows, the platform enables researchers to run complex genomic analyses without coding expertise. The agentic layer introduces a new way to interact with genomic data, enhancing automation, enabling interactive exploration, reducing workflow bottlenecks, redefining how scientists collaborate, analyze andutilize genomic insights.</p>
  
        <h3 className={styles.workDetailSubheading}>The Challenge</h3>
        <p className={styles.workDetailParagraph}>Researchers often encounter significant obstacles in genomic data analysis due to the intricate nature of Next-Generation Sequencing (NGS) workflows and the requisite coding expertise. Traditional platforms typically necessitate transferring sensitive genomic data into vendor-hosted environments, raising concerns about data security and compliance. Moreover, the absence of intuitive interfaces impedes collaboration between bench scientists and bioinformaticians, resulting in inefficiencies and delays in research and development.
       </p>
       <img src="/genomics/g1.avif" alt="genomics visuals frame 1" />
  
       <h3 className={styles.workDetailSubheading}>The Solution</h3>
        <p className={styles.workDetailParagraph}>Basepair addresses these challenges by offering a cutting-edge platform that simplifies and accelerates genomic data analysis. Its user-friendly, point-and-click interface enables researchers to perform complex analyses, such as whole genome and exome sequencing, without the need for coding skills. By integrating with AWS HealthOmics and GPU-accelerated tools like NVIDIA Parabricks, Basepair ensures secure, scalable, and efficient data processing within the user's own AWS environment, eliminating the need to move data into external hosted solutions.
  
  delays in research and development.
       </p>
       <img src="/genomics/g2.avif" alt="genomics visuals frame 2" />
  
       <h3 className={styles.workDetailSubheading}>The Result</h3>
        <p className={styles.workDetailParagraph}>By implementing Basepair's platform and its Agentic application, organizations can overcome traditional barriers in genomic data analysis. Researchers gain the ability to conduct sophisticated analyses without coding expertise, leading to increased efficiency and reduced bottlenecks in research workflows. The secure, in-place data processing within the user's AWS account addresses compliance concerns and optimizes cloud costs. The enhanced user interaction model, developed in partnership with Nester Labs, promotes better collaboration and accelerates the pace of scientific discovery, ultimately advancing the field of genomics.
       </p>
        
        
  
      </>
    );
  }
  
