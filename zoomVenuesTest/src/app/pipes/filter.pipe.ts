import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  /**
  * @items = object from array
  * @searchQuery = searchQuery's search
  */
  transform(items: any, searchQuery: any, itemstosearch: any): any {

    if (searchQuery === undefined || searchQuery === null || searchQuery === '') return items;
    // console.log(itemstosearch)
    let finalitems = [];
    if (itemstosearch !== null && itemstosearch !== undefined && itemstosearch.length > 0) {
      for (let i = 0; i < items.length; i++) {
        let record = items[i];
        let newobj: any = {};
        for (let attribute in record) {
          // console.log(record[attribute])
          if (itemstosearch !== undefined) {
            for (let index = 0; index < itemstosearch.length; index++) {
              if (attribute == itemstosearch[index]) {
                newobj[attribute] = record[attribute]
              }
            }
          }
        }
        finalitems.push(newobj)
      }
    }
    else{
      // console.log("here")
      finalitems=items
    }
    // console.log(finalitems)
    var filtered = finalitems.filter(function (item) {
      for (let property in item) {
        if (item[property] === null || item[property] === undefined) {

          continue;
        }
        if (searchQuery !== undefined && searchQuery !== null && searchQuery !== '') {
          if (item[property].toString().toLowerCase().includes(searchQuery.toLowerCase())) {
            var nestedLevel1 = item[property]
            if (nestedLevel1.length > 0) {
              for (let property1 in nestedLevel1) {
                if (nestedLevel1[property1] === null || nestedLevel1[property1] === undefined)
                  continue;
                if (nestedLevel1[property1].toString().toLowerCase().includes(searchQuery.toLowerCase())) {

                  var nestedLevel2 = nestedLevel1[property1]
                  if (nestedLevel2.length > 0) {
                    for (let property2 in nestedLevel2) {
                      if (nestedLevel2[property2] === null || nestedLevel2[property2] === undefined)
                        continue;
                      if (nestedLevel2[property2].toString().toLowerCase().includes(searchQuery.toLowerCase())) {
                        var nestedLevel3 = nestedLevel2[property2]
                        if (nestedLevel3 > 0) {
                          for (let property3 in nestedLevel3) {
                            if (nestedLevel3[property3] === null || nestedLevel3[property3] === undefined)
                              continue;
                            if (nestedLevel3[property3].toString().toLowerCase().includes(searchQuery.toLowerCase())) {

                              var nestedLevel4 = nestedLevel3[property3];
                              if (nestedLevel4 > 0) {
                                for (let property4 in nestedLevel4) {
                                  if (nestedLevel4[property4].toString().toLowerCase().includes(searchQuery.toLowerCase())) {
                                    if (nestedLevel4[property4] === null || nestedLevel4[property4] === undefined)
                                      continue;
                                    if (nestedLevel4[property4].toString().toLowerCase().includes(searchQuery.toLowerCase())) {

                                      return true;
                                    }


                                    return true
                                  }


                                }



                              }





                              return true;
                            }



                          }


                        }


                        return true;
                      }


                    }
                  }

                  return true;

                }

              }
            }

            return true;
          }
        }
      }
      return false;
    });

    return filtered;
  }

}
