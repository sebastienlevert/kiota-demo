import {Plugintypestatistic} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPlugintypestatisticFromDiscriminatorValue(parseNode: ParseNode | undefined) : Plugintypestatistic {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Plugintypestatistic();
}
