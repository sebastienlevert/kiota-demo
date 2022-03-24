import {Msdyn_customerassetcategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_customerassetcategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_customerassetcategory {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_customerassetcategory();
}
