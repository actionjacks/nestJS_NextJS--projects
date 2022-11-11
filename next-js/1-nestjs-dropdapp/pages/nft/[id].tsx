import React from "react";
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'

function NTFDropPage() {
  // auth
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left */}
      <div className="lg:col-span-4 bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
            <img className="w-44 rounded-xl object-cover lg:h-96 lg:w-72" src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png" alt="" />
          </div>
          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl from-bold text-white">
              jacko profile
            </h1>
            <h2 className="text-xl text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque minima quae, quo ducimus dolores repellendus ea aspernatur numquam ex? Qui atque hic voluptate veritatis ipsa, nam nulla enim fugit quos.
            </h2>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        <header className="flex items-center justyfy-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              ACTIONJACKS22
            </span>{' '}
            Market place
          </h1>
          <button className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
            onClick={address ? disconnect : connectWithMetamask}>
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>

        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            You're logged in with wallet
            {address.substring(0, 5)}...{address.substring(address.length - 5)}
          </p>
        )}
        <div className="mt-10 flex flex-1 flex-col item-center space-y-6 text-center lg:space-y-0 lg:justify-center">
          <img className="w-80 object-cover pb-10 lg:h-40 m-auto" src="https://images.photowall.com/products/48217/space-odyssey.jpg?h=699&q=85" alt="" />

          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold"
          >LOrem Lorem ipsum :)</h1>

          <p className="pt-2 text-xl text-green-500">Lorem ipsum, dolor sit amet cons</p>
        </div>
        <button className="mt-10 h-16 w-full rounded-full bg-red-600 text-white font-bold">
          Min NFT (0.01 ETH)
        </button>
      </div>
    </div >
  );
}

export default NTFDropPage;
