import {Entityimageconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEntityimageconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Entityimageconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Entityimageconfig();
}
