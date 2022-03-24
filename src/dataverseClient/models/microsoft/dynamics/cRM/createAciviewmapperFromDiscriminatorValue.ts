import {Aciviewmapper} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAciviewmapperFromDiscriminatorValue(parseNode: ParseNode | undefined) : Aciviewmapper {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Aciviewmapper();
}
