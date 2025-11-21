import { Target } from 'lucide-react';
import Image from "next/image";
import Link from 'next/link';
export default function ExerciseCard(props: { [key: string]: string }) {
    const { name, id, difficulty, gifUrl, description, target } = props;

    return (
        <div className=" lg:min-h-fit w-full bg-black flex items-center justify-center">
            <Link href={`/exercises/${id}`} className="w-full  bg-black border-2 border-yellow-400 rounded-2xl overflow-hidden hover:border-yellow-300 hover:shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">

                    {/* Image Section */}
                    <div className="bg-white p-6 sm:p-8 lg:p-10 flex items-center justify-center relative">
                        <div className="absolute top-4 left-4 bg-yellow-400 text-black px-5 py-2 rounded-lg font-bold text-2xl z-10">
                            {name}
                        </div>
                        <div className="w-full h-full min-h-[300px] sm:min-h-[300px] flex items-center justify-center">
                            <Image
                                src={gifUrl}
                                alt={name}
                                className="max-w-full max-h-full object-contain"
                                fill
                                loading='lazy'
                            />
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-black p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="font-bold text-yellow-400">
                                    {name}
                                </h2>
                                <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-2xl">
                                    {difficulty}
                                </span>
                            </div>

                            <p className="text-gray-300 text-4xl leading-relaxed mb-6">
                                {
                                    description
                                }
                            </p>

                            {/* Target Muscle */}
                            <div className="bg-gray-900 border border-yellow-400 rounded-lg p-4 mb-6">
                                <div className="flex items-center gap-3">
                                    <Target className="w-6 h-6 text-yellow-400" />
                                    <div>
                                        <p className="text-yellow-400 font-bold text-4xl mb-1">Target Muscle</p>
                                        <p className="text-white text-3xl font-bold">{target}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Action Button */}
                        <button className="w-full bg-yellow-400 text-black font-bold py-3 sm:py-4 rounded-lg hover:bg-yellow-300 transition-colors duration-300 ">
                            Start Exercise
                        </button>
                    </div>
                </div>
            </Link>
        </div>
    )
}