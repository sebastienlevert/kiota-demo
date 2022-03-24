import {Appconfigmaster} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppconfigmasterFromDiscriminatorValue(parseNode: ParseNode | undefined) : Appconfigmaster {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Appconfigmaster();
}
