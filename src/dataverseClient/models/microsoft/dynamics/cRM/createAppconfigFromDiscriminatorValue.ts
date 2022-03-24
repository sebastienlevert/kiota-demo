import {Appconfig} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppconfigFromDiscriminatorValue(parseNode: ParseNode | undefined) : Appconfig {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Appconfig();
}
