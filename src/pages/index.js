import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import SidebarCart from '@/Cart/SidebarCart'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // side cart toggle functionalities start here
  const [isCartOpen, SetIsCartOpen] = useState(false);
  const toggleSidebarCart = () => {
    SetIsCartOpen(!isCartOpen);
  };
  // side cart toggle functionalities end here


  return (
    <>
      <Head>
        <title>Bazar UI</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header toggleSidebarCart={toggleSidebarCart} />
        <main className="max-w-6xl mx-auto py-44">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique a est laudantium impedit. Sequi accusamus id molestias delectus deleniti eveniet laborum facere, impedit repudiandae minus aliquid consequatur cupiditate. Blanditiis, quam consequatur autem voluptatem dolorum odit quod aperiam rerum numquam minus, ea aliquam ipsa facere, cupiditate laudantium accusantium dicta omnis optio ad sapiente a quaerat iure modi eveniet! Neque sapiente iste numquam soluta ducimus cum illo labore quis possimus harum tempora quidem culpa, sint mollitia! Eveniet nobis mollitia quas harum eum iure quos, explicabo beatae quisquam. Debitis commodi numquam saepe reprehenderit, aspernatur dolores illum pariatur culpa vel molestias harum libero at neque, explicabo voluptates aperiam. Ducimus vitae laborum odit molestiae sapiente corporis amet cum nobis quos, ipsa repudiandae autem natus quam atque illum in obcaecati consequuntur dolore accusantium non eligendi asperiores consectetur animi commodi? Eaque iusto perferendis reiciendis magni dolorum aperiam minus natus esse beatae odit. Quaerat suscipit, aliquam magnam laboriosam cumque omnis impedit soluta vero consequatur, repellendus veritatis obcaecati! Ea necessitatibus dolorem esse officia exercitationem magni cumque eaque repellendus corporis sequi quae quia, quam, quis veritatis accusantium velit ab delectus explicabo, nam doloribus facere iste. Quis cupiditate reprehenderit quos sit officiis dolorum expedita beatae ducimus esse reiciendis! Porro, numquam quae. Accusantium, quod. Harum, dolorem adipisci. Quod dolorem accusantium debitis aliquid blanditiis numquam fuga iusto eum, ex distinctio officia iste, molestiae aperiam nihil ratione! Accusantium explicabo, aut autem quaerat nobis maxime consequuntur molestias pariatur a! Ab architecto tempore nulla doloremque ratione. Consequatur eum voluptas excepturi sit accusamus sequi commodi maiores magnam laboriosam ut! Dignissimos necessitatibus porro tempore debitis. Ut, earum beatae totam sint hic facilis consectetur alias dolore doloremque fugiat repudiandae ad nobis impedit magnam dicta aperiam expedita repellendus atque necessitatibus labore recusandae est quisquam dolorum in. Totam porro sapiente placeat magni, voluptatum optio reiciendis. Ipsa distinctio eius explicabo unde tempore quo voluptate quibusdam, aut commodi reprehenderit repudiandae veniam atque voluptatum, iste, adipisci perspiciatis dolorum facere! Quo magnam perferendis, iusto facere et, quod assumenda sequi alias expedita porro possimus maiores omnis eaque numquam veritatis similique consequatur optio quam, culpa ipsum sed temporibus nemo molestiae provident! Inventore, beatae assumenda veniam aspernatur quaerat id! Ea sequi reiciendis iure in deserunt tenetur incidunt aut, obcaecati sit sed explicabo magni quos molestiae! Voluptate numquam dolor iure dolore obcaecati, ullam, eaque voluptates consequatur officiis error quas maiores vero rem esse repellat aut illum animi aliquam! Necessitatibus velit hic nesciunt. Dolor quas temporibus ad dicta laboriosam quibusdam placeat non aspernatur maiores, repudiandae doloribus cupiditate dignissimos ipsa ut fugiat quod quis obcaecati voluptas quia. Nam sit rerum dolorem libero delectus laudantium quod. Harum rem odit rerum, reiciendis fugit aliquam aspernatur facilis, tempore consequuntur vitae non quisquam doloremque quo. Modi, alias reprehenderit accusamus quam beatae quisquam dolore, quod a commodi quas consequuntur quasi rerum quo esse exercitationem tempore nam dignissimos at debitis architecto placeat. Quis ipsum voluptatem ullam fugit molestias ratione eos id reprehenderit soluta obcaecati tempore vitae amet asperiores est labore quae deleniti nisi autem et maiores, facere voluptatibus tempora laudantium perspiciatis? In eum qui enim saepe perspiciatis magnam quaerat, quia quis corrupti magni, quae dolorem? Ex cum qui blanditiis, sint dolore provident alias dolorum natus maiores, corrupti ad deleniti ab doloremque delectus. Expedita, omnis quia! Magni, minus repellat quos aspernatur, vitae tempora totam, numquam vero temporibus ab delectus suscipit ipsa. Sed alias aliquam aliquid natus voluptas necessitatibus, quae nulla nisi iusto saepe? Obcaecati est maxime modi soluta ullam quaerat voluptatem? Eos aspernatur exercitationem quo quod maxime dolore, repellat illo cum odit consequuntur iure repudiandae animi impedit architecto reprehenderit, eum nihil quia dolores eveniet velit? Praesentium commodi officiis distinctio beatae, vitae non voluptate consectetur, illum ex accusamus quia laudantium, quam deserunt ea repellat nam amet dicta blanditiis corrupti aut. Ad vero obcaecati dicta, sequi aut repudiandae rerum. Voluptatibus dolor, totam soluta temporibus doloremque omnis exercitationem quisquam? Odio harum accusantium deserunt fugit, numquam nihil! Nisi consectetur, eveniet harum ducimus quidem ut odio ab rem reiciendis aspernatur, tenetur autem dignissimos doloremque enim eaque iusto neque! Magni quae, iusto officia tenetur debitis earum ipsa nisi cumque neque quod dolorum fugiat consequuntur consectetur sunt quam dicta praesentium ex quis. Voluptate tempora voluptates id consequuntur neque nulla magnam deleniti aperiam repellendus nemo magni vel quo beatae commodi quae dolores similique iste sit dolorum culpa placeat, minima saepe, veniam ex! Rerum dicta voluptates, accusantium modi doloremque incidunt nostrum! Fugit ea nisi quasi, ratione dolorem eligendi, nihil deserunt consectetur accusantium doloribus voluptatibus ipsa recusandae autem aperiam reiciendis pariatur doloremque praesentium perferendis veritatis, suscipit laborum voluptates distinctio molestias. Eum nemo dicta error debitis accusamus! Earum veritatis porro, ab esse voluptatibus inventore fugiat dolorum veniam ipsa dolor corporis voluptates, doloremque eligendi temporibus doloribus velit a aliquam molestiae fugit. Voluptates nihil illo sequi, ipsam culpa eos quas. Pariatur iste recusandae error deserunt minus nihil sint soluta inventore incidunt impedit, et minima aliquid provident, quibusdam maiores veritatis nobis! Molestiae sequi nemo velit accusamus asperiores fugiat pariatur, facere odio, quis cupiditate veritatis harum natus fugit voluptatibus ex? Provident maxime neque cupiditate at eos asperiores qui! Eveniet, odit fugit placeat et nesciunt, maxime cumque sint eligendi obcaecati laboriosam quidem? Quibusdam aliquam reprehenderit, nam nulla libero adipisci, eius in modi, architecto quaerat quisquam sint quo! Quaerat sint hic eligendi eius nostrum, dolorem culpa, laborum libero qui aut earum nobis eveniet perferendis officiis neque necessitatibus perspiciatis ut voluptatum ex aliquam eaque dolor dignissimos. Ducimus, aperiam earum nisi, perspiciatis sit expedita impedit velit facilis maxime suscipit voluptatibus enim porro iure nulla vero atque mollitia ipsam obcaecati iusto ratione nobis asperiores error exercitationem repudiandae. Nemo ipsa ad quia laboriosam. Mollitia quis magni beatae explicabo, deleniti quo? Ratione, veniam quia! Accusantium odit earum voluptatem deserunt harum ratione soluta sit velit nostrum, dolores asperiores, animi dolorem dolorum ipsam non recusandae, molestiae corporis. Nesciunt ut cupiditate iure sequi reiciendis similique, facilis voluptate! Eligendi tenetur consectetur reprehenderit sunt saepe quo cupiditate reiciendis voluptatum omnis enim, fugit nemo sequi fugiat necessitatibus corporis dolores delectus eos neque velit exercitationem voluptate! Iure illum nobis, corrupti consequatur sed cum beatae itaque, cupiditate ea voluptate debitis laudantium error quam maiores, in velit? Quae consequatur, dolorum, ipsa sed, rem aperiam minima quasi ducimus neque reiciendis excepturi culpa et debitis iure facilis ad rerum doloremque repudiandae! At aliquid eveniet dolor nam debitis. Possimus reiciendis similique qui laborum, aspernatur, eum officia commodi aperiam maxime consequuntur dolorum nesciunt sint, est dicta debitis hic ipsam quo ullam. Recusandae ipsa quod aspernatur molestiae quisquam reiciendis voluptas nemo cumque debitis laboriosam fugit, quidem quaerat nesciunt delectus quia laborum et error velit! Velit repellendus vero quam? Libero sed vero nam, nostrum ex deleniti suscipit quod debitis cum quibusdam consectetur maiores aspernatur delectus similique mollitia magnam quasi dolore quis placeat asperiores cupiditate a repellendus. Voluptate consequuntur dignissimos voluptatum non ipsum, rerum laboriosam iusto modi officia ratione perspiciatis adipisci. Eos fugit voluptatibus nam impedit corrupti sunt sed dolore libero asperiores maxime ullam cumque, dignissimos necessitatibus aliquid animi, dolores vitae eum? Exercitationem praesentium doloribus architecto consequuntur inventore quam enim aut ipsum ex eius est, autem harum impedit, nemo iusto fuga molestiae iste ipsam sunt fugit omnis minima, perspiciatis a reprehenderit! Asperiores consectetur vel fuga eaque nostrum iste, perferendis beatae, molestias nemo maxime accusamus temporibus illo unde aspernatur aperiam perspiciatis ab at esse cum. Laboriosam obcaecati cupiditate mollitia, repudiandae quidem in, voluptates consequuntur atque dolore inventore sunt necessitatibus nihil hic deserunt officiis quibusdam cumque et itaque quia saepe. Voluptatem, voluptate? Aperiam laborum minima officiis omnis facilis repudiandae. Voluptatibus nulla, error numquam dolore iste consequuntur perferendis inventore quas sapiente at perspiciatis molestias eligendi provident minima, doloremque repellat in dicta alias praesentium quasi! Explicabo v
        </main>
        {
          isCartOpen && <SidebarCart isCartOpen={isCartOpen} toggleSidebarCart={toggleSidebarCart} />
        }
        <Footer />
      </main>
    </>
  )
}
