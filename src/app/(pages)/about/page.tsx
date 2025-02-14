'use client'

import { motion } from "framer-motion";
import { CheckCircle, Lightbulb, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
const About = () => {
  const accomplishments = [
    {
      title: "Enterprise Architecture",
      description:
        "Led the design and implementation of scalable enterprise systems serving millions of users",
      icon: <Rocket className="w-6 h-6 text-red-cmyk" />,
    },
    {
      title: "Technical Leadership",
      description:
        "Successfully managed and mentored teams of developers across multiple projects",
      icon: <Lightbulb className="w-6 h-6 text-red-cmyk" />,
    },
    {
      title: "Innovation",
      description:
        "Pioneered the adoption of cutting-edge technologies in enterprise environments",
      icon: <CheckCircle className="w-6 h-6 text-red-cmyk" />,
    },
  ];

  return (
    <div className="pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-6">About Me</h1>
          <div className="prose prose-lg max-w-none text-gray-300">
            <p className="mb-4">
              As a Senior Full Stack Software Engineer and Enterprise Systems
              Architect, I bring over two decades of experience in designing,
              developing, and deploying complex software solutions. My expertise
              spans across the entire software development lifecycle, with a
              particular focus on creating scalable, maintainable, and efficient
              systems.
            </p>
            <p>
              I specialize in enterprise architecture, distributed systems, and
              cloud-native applications. My approach combines technical
              excellence with strategic thinking, ensuring that solutions not
              only meet current needs but are also positioned for future growth
              and adaptation.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white mb-8">
            Key Accomplishments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {accomplishments.map((item, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow bg-indigo-dye/20 border-indigo-dye"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        <Separator className="my-12 bg-indigo-dye" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-semibold text-white mb-8">
            Professional Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Technical Excellence
              </h3>
              <p className="text-gray-300">
                I believe in writing clean, maintainable code that follows
                industry best practices. My solutions are built with scalability
                and performance in mind, ensuring they can grow with your
                business needs.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Collaborative Development
              </h3>
              <p className="text-gray-300">
                I work closely with stakeholders to understand their needs and
                deliver solutions that exceed expectations. Clear communication
                and agile methodologies are key to my development process.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Continuous Learning
              </h3>
              <p className="text-gray-300">
                Technology evolves rapidly, and I'm committed to staying at the
                forefront. I regularly explore new technologies and
                methodologies to bring innovative solutions to complex problems.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Result-Driven Focus
              </h3>
              <p className="text-gray-300">
                Every project I undertake is approached with a clear focus on
                delivering measurable results. I believe in creating solutions
                that not only work well but also provide real business value.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
