export default function ContainerSearch(props) {
    // Компонент отображения логотипа, окна поиска, кнопки и описания под окном поиска
    return(
        <div className="search-wrapper">
          <div>
            <img src="data:image/svg+xml;charset=utf8,%3Csvg width='140' height='100' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M121.943 65.335c2.261 0 3.865-.412 5.057-1.275v-3.988c-1.234.863-2.714 1.398-4.77 1.398-3.494 0-4.933-2.714-4.933-6.99 0-4.482 1.768-6.784 4.975-6.784 1.891 0 3.741.658 4.728 1.275v-4.153c-1.028-.576-2.837-.987-5.263-.987-6.249 0-9.498 4.482-9.498 10.772 0 6.908 3.166 10.732 9.704 10.732zm-30.59-1.81v-3.988c-1.521 1.028-4.07 1.933-6.455 1.933-3.578 0-4.934-1.686-5.14-5.14h11.8v-2.59c0-7.195-3.166-9.909-8.058-9.909-5.962 0-8.8 4.564-8.8 10.813 0 7.196 3.537 10.69 9.786 10.69 3.125 0 5.428-.822 6.867-1.809zM46.537 44.242v8.182h-6.538v-8.182h-4.892v20.681h4.892V56.29h6.538v8.634h4.893v-20.68h-4.893zM73.509 61.06h-2.18V44.242H57.063v1.768c0 5.057-.328 11.595-2.055 15.049h-1.522v8.593h4.523v-4.729h10.978v4.729h4.523v-8.593zm33.468 3.864h5.55l-7.853-11.142 6.908-9.539h-4.934l-6.908 9.539v-9.539h-4.892v20.681h4.892V54.768l7.237 10.155zm-23.56-17.227c2.426 0 3.166 2.015 3.166 4.605v.411h-6.825c.124-3.29 1.316-5.016 3.66-5.016zm-16.98 13.363h-6.908c1.357-3.125 1.727-8.758 1.727-12.335v-.617h5.18V61.06z' fill='%23000'/%3E%3Cpath d='M30.995 64.923H26.02v-24.71H23.8c-4.07 0-6.208 2.055-6.208 5.098 0 3.453 1.48 5.057 4.522 7.113l2.508 1.686-7.236 10.813H12l6.496-9.662c-3.741-2.673-5.838-5.263-5.838-9.662 0-5.51 3.824-9.251 11.101-9.251h7.236v28.575z' fill='%23FC3F1D'/%3E%3C/svg%3E" />
          </div>        
          <div className="search-wrapper-block">
            <div className="search-wrapper-block-elems">
              <input className="" type="text" name="search" />
              <button className="" type="submit" name="submit">Найти </button>
            </div>
            <p className="search-wrapper-description">Найдётся всё. Например, <span className="gray-block"> фазы луны сегодня</span></p>
          </div>
        </div>
    );
}