import {Msdyn_kmfederatedsearchconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMsdyn_kmfederatedsearchconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Msdyn_kmfederatedsearchconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Msdyn_kmfederatedsearchconfig();
}
