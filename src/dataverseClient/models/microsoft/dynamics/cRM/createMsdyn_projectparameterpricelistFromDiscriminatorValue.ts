import {Msdyn_projectparameterpricelist} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_projectparameterpricelistFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_projectparameterpricelist {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_projectparameterpricelist();
}
