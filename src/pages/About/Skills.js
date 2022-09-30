import React, { useState } from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { BsArrowDown } from 'react-icons/bs';
import dataSet from '../../data/DataFile';
import ListItems from '../../components/ListItems';

const Skills = () => {
  const [openLang, setOpenLang] = useState(false);
  const [openTools, setOpenTools] = useState(false);
  const [openProd, setOpenProd] = useState(false);

  const { languages, myTools, myProductions } = dataSet.skillsSet;

  return (
    <div data-scroll-section className=" h-full">
      <SectionHeader title={'My Skills'} subtitle={'& Proficiency'} />
      <div className="skills__section__wrapper pb-32 pt-16 grid grid-cols-3 gap-[6.5%] min-h-full">
        <div className="skills__language">
          <div className="border-y border-solid border-y-white pt-8">
            <div
              className="flex justify-between"
              onClick={() => setOpenLang((openLang) => !openLang)}
            >
              <h3 className=" font-montserrat font-bold pb-8 text-3xl">
                Language
              </h3>
              <BsArrowDown
                className=" text-3xl transition ease-in-out delay-150 duration-300"
                style={
                  !openLang
                    ? { transform: 'rotate(-180deg)' }
                    : { transform: 'rotate(0)' }
                }
              />
            </div>

            <div
              style={
                !openLang
                  ? { display: 'flex', transition: 'all' }
                  : { display: 'none' }
              }
              className="pb-7"
            >
              <ul className="flex flex-col gap-4 w-[90%]">
                {languages.map((skill) => (
                  <li
                    key={skill.id}
                    className="grid grid-cols-8 items-center gap-5 w-full"
                  >
                    {' '}
                    <img
                      src={skill.item}
                      alt="skill"
                      className="skill__image w-9 h-9"
                    />
                    <input
                      type="range"
                      defaultValue={skill.progress}
                      max="100"
                      min="0"
                      step="2"
                      id="myRange"
                      className=" w-full h-0.5 bg-slate-400 outline-none appearance-none col-span-6 opacity-50"
                    />
                    <p className="font-montserrat font-thin">
                      {skill.progress}
                      {'%'}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="skills__tools">
          <div className=" border-y border-solid border-y-white pt-8">
            <div
              className="flex justify-between"
              onClick={() => setOpenTools((openTools) => !openTools)}
            >
              <h3 className=" font-montserrat font-bold pb-8 text-3xl">
                My Tools
              </h3>
              <BsArrowDown
                className=" text-3xl transition-all ease-in-out delay-150 duration-300"
                style={
                  openTools
                    ? { transform: 'rotate(-180deg)' }
                    : { transform: 'rotate(0)' }
                }
              />
            </div>
            <div
              style={openTools ? { display: 'flex' } : { display: 'none' }}
              className="transition-all ease-in-out delay-150 duration-300"
            >
              <ListItems dataset={myTools} />
            </div>
          </div>
        </div>
        <div className="skills__production">
          <div className=" border-y border-solid border-y-white pt-8">
            <div
              className="flex justify-between"
              onClick={() => setOpenProd((openProd) => !openProd)}
            >
              <h3 className=" font-montserrat font-bold pb-8 text-3xl">
                Productions
              </h3>
              <BsArrowDown
                className=" text-3xl transition-all ease-in-out delay-150 duration-300"
                style={
                  openProd
                    ? { transform: 'rotate(-180deg)' }
                    : { transform: 'rotate(0)' }
                }
              />
            </div>
            <div
              style={openProd ? { display: 'flex' } : { display: 'none' }}
              className="transition-all ease-in-out delay-150 duration-300"
            >
              <ListItems dataset={myProductions} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
