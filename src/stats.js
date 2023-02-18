// import { PaperClipIcon } from '@heroicons/react/20/solid'
import { Toparea } from './toparea.js';
import "./stats.css"

export default function Example() {
  return (
    <div className="card my-10">
    <div className="overflow-hidden bg-grey shadow sm:rounded-lg my-5">
      <div className="px-4   sm:px-6">
        <h3 className="text-lg font-small leading-6 text-gray-900">Top Areas</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">for May 2023</p>
      </div>
      <div className="barchart bg-white">
      <Toparea/></div>
      <div className="text">
      <div className="border-t border-black-200">
        <dl>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-7 sm:gap-4 sm:px-3">
            <dt className="text-sm font-small text-gray-500">color1</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Kothrud</dd>
          </div>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-7 sm:gap-4 sm:px-3">
            <dt className="text-sm font-small text-gray-500">color1</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Warje</dd>
          </div>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-7 sm:gap-4 sm:px-3">
            <dt className="text-sm font-small text-gray-500">color1</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-3 sm:mt-0">Peth</dd>
          </div>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-7 sm:gap-4 sm:px-3">
            <dt className="text-sm font-small text-gray-500">color1</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">PCMC</dd>
          </div>
          <div className="bg-white px-4 py-1 sm:grid sm:grid-cols-7 sm:gap-4 sm:px-3">
            <dt className="text-sm font-small text-gray-500">color1</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">Hinjewadi</dd>
          </div>
          
          
        </dl></div>
      </div>
    </div></div>
  )
}