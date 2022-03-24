import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_priorityFromDiscriminatorValue} from './createMsdyn_priorityFromDiscriminatorValue';
import {createMsdyn_quotebookingincidentFromDiscriminatorValue} from './createMsdyn_quotebookingincidentFromDiscriminatorValue';
import {createMsdyn_quotebookingproductFromDiscriminatorValue} from './createMsdyn_quotebookingproductFromDiscriminatorValue';
import {createMsdyn_quotebookingserviceFromDiscriminatorValue} from './createMsdyn_quotebookingserviceFromDiscriminatorValue';
import {createMsdyn_quotebookingservicetaskFromDiscriminatorValue} from './createMsdyn_quotebookingservicetaskFromDiscriminatorValue';
import {createMsdyn_workordertypeFromDiscriminatorValue} from './createMsdyn_workordertypeFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_priority, Msdyn_quotebookingincident, Msdyn_quotebookingproduct, Msdyn_quotebookingservice, Msdyn_quotebookingservicetask, Msdyn_workordertype, Principal, Principalobjectattributeaccess, Processsession, Processstage, Quote, Quotedetail, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_quotebookingsetup extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_preferredresource_value?: string | undefined;
    private __msdyn_priority_value?: string | undefined;
    private __msdyn_quote_value?: string | undefined;
    private __msdyn_quotedetail_msdyn_quotebookingset_value?: string | undefined;
    private __msdyn_workordertype_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __stageid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_autogeneratebooking?: boolean | undefined;
    private _msdyn_autogenerateworkorder?: boolean | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_estimatedcost?: number | undefined;
    private _msdyn_estimatedcost_base?: number | undefined;
    private _msdyn_estimatedduration?: number | undefined;
    private _msdyn_estimatedmargin?: number | undefined;
    private _msdyn_estimatedmarginperwo?: number | undefined;
    private _msdyn_estimatedproductcost?: number | undefined;
    private _msdyn_estimatedproductcost_base?: number | undefined;
    private _msdyn_estimatedproductrevenue?: number | undefined;
    private _msdyn_estimatedproductrevenue_base?: number | undefined;
    private _msdyn_estimatedrevenue?: number | undefined;
    private _msdyn_estimatedrevenue_base?: number | undefined;
    private _msdyn_estimatedrevenueperwo?: number | undefined;
    private _msdyn_estimatedrevenueperwo_base?: number | undefined;
    private _msdyn_estimatedservicecost?: number | undefined;
    private _msdyn_estimatedservicecost_base?: number | undefined;
    private _msdyn_estimatedservicerevenue?: number | undefined;
    private _msdyn_estimatedservicerevenue_base?: number | undefined;
    private _msdyn_generateworkorderdaysinadvance?: number | undefined;
    private _msdyn_Internalflags?: string | undefined;
    private _msdyn_latitude?: number | undefined;
    private _msdyn_longitude?: number | undefined;
    private _msdyn_margin?: number | undefined;
    private _msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup?: Msdyn_quotebookingincident[] | undefined;
    private _msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup?: Msdyn_quotebookingproduct[] | undefined;
    private _msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup?: Msdyn_quotebookingservice[] | undefined;
    private _msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup?: Msdyn_quotebookingservicetask[] | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_numberofwo?: number | undefined;
    private _msdyn_postbookingflexibility?: number | undefined;
    private _msdyn_postponegenerationuntil?: Date | undefined;
    private _msdyn_prebookingflexibility?: number | undefined;
    private _msdyn_preferredresource?: Bookableresource | undefined;
    private _msdyn_preferredstarttime?: Date | undefined;
    private _msdyn_priority?: Msdyn_priority | undefined;
    private _msdyn_quote?: Quote | undefined;
    private _msdyn_quotebookingsetup_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_quotebookingsetup_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_quotebookingsetup_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotebookingsetup_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotebookingsetup_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_quotebookingsetup_ProcessSession?: Processsession[] | undefined;
    private _msdyn_quotebookingsetup_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_quotebookingsetupid?: string | undefined;
    private _msdyn_quotedetail_msdyn_quotebookingset?: Quotedetail | undefined;
    private _msdyn_quotedetailid?: string | undefined;
    private _msdyn_recurrencesettings?: string | undefined;
    private _msdyn_revision?: number | undefined;
    private _msdyn_timewindowend?: Date | undefined;
    private _msdyn_timewindowstart?: Date | undefined;
    private _msdyn_worklocation?: number | undefined;
    private _msdyn_workordersummary?: string | undefined;
    private _msdyn_workordertype?: Msdyn_workordertype | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processid?: string | undefined;
    private _stageid?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _createdby_value property value. 
     * @returns a string
     */
    public get _createdby_value() {
        return this.__createdby_value;
    };
    /**
     * Sets the _createdby_value property value. 
     * @param value Value to set for the _createdby_value property.
     */
    public set _createdby_value(value: string | undefined) {
        this.__createdby_value = value;
    };
    /**
     * Gets the _createdonbehalfby_value property value. 
     * @returns a string
     */
    public get _createdonbehalfby_value() {
        return this.__createdonbehalfby_value;
    };
    /**
     * Sets the _createdonbehalfby_value property value. 
     * @param value Value to set for the _createdonbehalfby_value property.
     */
    public set _createdonbehalfby_value(value: string | undefined) {
        this.__createdonbehalfby_value = value;
    };
    /**
     * Gets the _modifiedby_value property value. 
     * @returns a string
     */
    public get _modifiedby_value() {
        return this.__modifiedby_value;
    };
    /**
     * Sets the _modifiedby_value property value. 
     * @param value Value to set for the _modifiedby_value property.
     */
    public set _modifiedby_value(value: string | undefined) {
        this.__modifiedby_value = value;
    };
    /**
     * Gets the _modifiedonbehalfby_value property value. 
     * @returns a string
     */
    public get _modifiedonbehalfby_value() {
        return this.__modifiedonbehalfby_value;
    };
    /**
     * Sets the _modifiedonbehalfby_value property value. 
     * @param value Value to set for the _modifiedonbehalfby_value property.
     */
    public set _modifiedonbehalfby_value(value: string | undefined) {
        this.__modifiedonbehalfby_value = value;
    };
    /**
     * Gets the _msdyn_preferredresource_value property value. 
     * @returns a string
     */
    public get _msdyn_preferredresource_value() {
        return this.__msdyn_preferredresource_value;
    };
    /**
     * Sets the _msdyn_preferredresource_value property value. 
     * @param value Value to set for the _msdyn_preferredresource_value property.
     */
    public set _msdyn_preferredresource_value(value: string | undefined) {
        this.__msdyn_preferredresource_value = value;
    };
    /**
     * Gets the _msdyn_priority_value property value. 
     * @returns a string
     */
    public get _msdyn_priority_value() {
        return this.__msdyn_priority_value;
    };
    /**
     * Sets the _msdyn_priority_value property value. 
     * @param value Value to set for the _msdyn_priority_value property.
     */
    public set _msdyn_priority_value(value: string | undefined) {
        this.__msdyn_priority_value = value;
    };
    /**
     * Gets the _msdyn_quote_value property value. 
     * @returns a string
     */
    public get _msdyn_quote_value() {
        return this.__msdyn_quote_value;
    };
    /**
     * Sets the _msdyn_quote_value property value. 
     * @param value Value to set for the _msdyn_quote_value property.
     */
    public set _msdyn_quote_value(value: string | undefined) {
        this.__msdyn_quote_value = value;
    };
    /**
     * Gets the _msdyn_quotedetail_msdyn_quotebookingset_value property value. 
     * @returns a string
     */
    public get _msdyn_quotedetail_msdyn_quotebookingset_value() {
        return this.__msdyn_quotedetail_msdyn_quotebookingset_value;
    };
    /**
     * Sets the _msdyn_quotedetail_msdyn_quotebookingset_value property value. 
     * @param value Value to set for the _msdyn_quotedetail_msdyn_quotebookingset_value property.
     */
    public set _msdyn_quotedetail_msdyn_quotebookingset_value(value: string | undefined) {
        this.__msdyn_quotedetail_msdyn_quotebookingset_value = value;
    };
    /**
     * Gets the _msdyn_workordertype_value property value. 
     * @returns a string
     */
    public get _msdyn_workordertype_value() {
        return this.__msdyn_workordertype_value;
    };
    /**
     * Sets the _msdyn_workordertype_value property value. 
     * @param value Value to set for the _msdyn_workordertype_value property.
     */
    public set _msdyn_workordertype_value(value: string | undefined) {
        this.__msdyn_workordertype_value = value;
    };
    /**
     * Gets the _ownerid_value property value. 
     * @returns a string
     */
    public get _ownerid_value() {
        return this.__ownerid_value;
    };
    /**
     * Sets the _ownerid_value property value. 
     * @param value Value to set for the _ownerid_value property.
     */
    public set _ownerid_value(value: string | undefined) {
        this.__ownerid_value = value;
    };
    /**
     * Gets the _owningbusinessunit_value property value. 
     * @returns a string
     */
    public get _owningbusinessunit_value() {
        return this.__owningbusinessunit_value;
    };
    /**
     * Sets the _owningbusinessunit_value property value. 
     * @param value Value to set for the _owningbusinessunit_value property.
     */
    public set _owningbusinessunit_value(value: string | undefined) {
        this.__owningbusinessunit_value = value;
    };
    /**
     * Gets the _owningteam_value property value. 
     * @returns a string
     */
    public get _owningteam_value() {
        return this.__owningteam_value;
    };
    /**
     * Sets the _owningteam_value property value. 
     * @param value Value to set for the _owningteam_value property.
     */
    public set _owningteam_value(value: string | undefined) {
        this.__owningteam_value = value;
    };
    /**
     * Gets the _owninguser_value property value. 
     * @returns a string
     */
    public get _owninguser_value() {
        return this.__owninguser_value;
    };
    /**
     * Sets the _owninguser_value property value. 
     * @param value Value to set for the _owninguser_value property.
     */
    public set _owninguser_value(value: string | undefined) {
        this.__owninguser_value = value;
    };
    /**
     * Gets the _stageid_value property value. 
     * @returns a string
     */
    public get _stageid_value() {
        return this.__stageid_value;
    };
    /**
     * Sets the _stageid_value property value. 
     * @param value Value to set for the _stageid_value property.
     */
    public set _stageid_value(value: string | undefined) {
        this.__stageid_value = value;
    };
    /**
     * Gets the _transactioncurrencyid_value property value. 
     * @returns a string
     */
    public get _transactioncurrencyid_value() {
        return this.__transactioncurrencyid_value;
    };
    /**
     * Sets the _transactioncurrencyid_value property value. 
     * @param value Value to set for the _transactioncurrencyid_value property.
     */
    public set _transactioncurrencyid_value(value: string | undefined) {
        this.__transactioncurrencyid_value = value;
    };
    /**
     * Instantiates a new msdyn_quotebookingsetup and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdby property value. 
     * @returns a systemuser
     */
    public get createdby() {
        return this._createdby;
    };
    /**
     * Sets the createdby property value. 
     * @param value Value to set for the createdby property.
     */
    public set createdby(value: Systemuser | undefined) {
        this._createdby = value;
    };
    /**
     * Gets the createdon property value. 
     * @returns a Date
     */
    public get createdon() {
        return this._createdon;
    };
    /**
     * Sets the createdon property value. 
     * @param value Value to set for the createdon property.
     */
    public set createdon(value: Date | undefined) {
        this._createdon = value;
    };
    /**
     * Gets the createdonbehalfby property value. 
     * @returns a systemuser
     */
    public get createdonbehalfby() {
        return this._createdonbehalfby;
    };
    /**
     * Sets the createdonbehalfby property value. 
     * @param value Value to set for the createdonbehalfby property.
     */
    public set createdonbehalfby(value: Systemuser | undefined) {
        this._createdonbehalfby = value;
    };
    /**
     * Gets the exchangerate property value. 
     * @returns a int64
     */
    public get exchangerate() {
        return this._exchangerate;
    };
    /**
     * Sets the exchangerate property value. 
     * @param value Value to set for the exchangerate property.
     */
    public set exchangerate(value: number | undefined) {
        this._exchangerate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_preferredresource_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._msdyn_preferredresource_value = n.getStringValue(); },
            "_msdyn_priority_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._msdyn_priority_value = n.getStringValue(); },
            "_msdyn_quote_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._msdyn_quote_value = n.getStringValue(); },
            "_msdyn_quotedetail_msdyn_quotebookingset_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._msdyn_quotedetail_msdyn_quotebookingset_value = n.getStringValue(); },
            "_msdyn_workordertype_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._msdyn_workordertype_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._owninguser_value = n.getStringValue(); },
            "_stageid_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._stageid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_quotebookingsetup)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_autogeneratebooking": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_autogeneratebooking = n.getBooleanValue(); },
            "msdyn_autogenerateworkorder": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_autogenerateworkorder = n.getBooleanValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_description = n.getStringValue(); },
            "msdyn_estimatedcost": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedcost = n.getNumberValue(); },
            "msdyn_estimatedcost_base": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedcost_base = n.getNumberValue(); },
            "msdyn_estimatedduration": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedduration = n.getNumberValue(); },
            "msdyn_estimatedmargin": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedmargin = n.getNumberValue(); },
            "msdyn_estimatedmarginperwo": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedmarginperwo = n.getNumberValue(); },
            "msdyn_estimatedproductcost": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedproductcost = n.getNumberValue(); },
            "msdyn_estimatedproductcost_base": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedproductcost_base = n.getNumberValue(); },
            "msdyn_estimatedproductrevenue": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedproductrevenue = n.getNumberValue(); },
            "msdyn_estimatedproductrevenue_base": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedproductrevenue_base = n.getNumberValue(); },
            "msdyn_estimatedrevenue": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedrevenue = n.getNumberValue(); },
            "msdyn_estimatedrevenue_base": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedrevenue_base = n.getNumberValue(); },
            "msdyn_estimatedrevenueperwo": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedrevenueperwo = n.getNumberValue(); },
            "msdyn_estimatedrevenueperwo_base": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedrevenueperwo_base = n.getNumberValue(); },
            "msdyn_estimatedservicecost": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedservicecost = n.getNumberValue(); },
            "msdyn_estimatedservicecost_base": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedservicecost_base = n.getNumberValue(); },
            "msdyn_estimatedservicerevenue": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedservicerevenue = n.getNumberValue(); },
            "msdyn_estimatedservicerevenue_base": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_estimatedservicerevenue_base = n.getNumberValue(); },
            "msdyn_generateworkorderdaysinadvance": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_generateworkorderdaysinadvance = n.getNumberValue(); },
            "msdyn_Internalflags": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_Internalflags = n.getStringValue(); },
            "msdyn_latitude": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_latitude = n.getNumberValue(); },
            "msdyn_longitude": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_longitude = n.getNumberValue(); },
            "msdyn_margin": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_margin = n.getNumberValue(); },
            "msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup = n.getCollectionOfObjectValues<Msdyn_quotebookingincident>(createMsdyn_quotebookingincidentFromDiscriminatorValue); },
            "msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup = n.getCollectionOfObjectValues<Msdyn_quotebookingproduct>(createMsdyn_quotebookingproductFromDiscriminatorValue); },
            "msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup = n.getCollectionOfObjectValues<Msdyn_quotebookingservice>(createMsdyn_quotebookingserviceFromDiscriminatorValue); },
            "msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup = n.getCollectionOfObjectValues<Msdyn_quotebookingservicetask>(createMsdyn_quotebookingservicetaskFromDiscriminatorValue); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_name = n.getStringValue(); },
            "msdyn_numberofwo": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_numberofwo = n.getNumberValue(); },
            "msdyn_postbookingflexibility": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_postbookingflexibility = n.getNumberValue(); },
            "msdyn_postponegenerationuntil": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_postponegenerationuntil = n.getDateValue(); },
            "msdyn_prebookingflexibility": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_prebookingflexibility = n.getNumberValue(); },
            "msdyn_preferredresource": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_preferredresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_preferredstarttime": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_preferredstarttime = n.getDateValue(); },
            "msdyn_priority": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_priority = n.getObjectValue<Msdyn_priority>(createMsdyn_priorityFromDiscriminatorValue); },
            "msdyn_quote": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quote = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "msdyn_quotebookingsetup_AsyncOperations": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotebookingsetup_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_quotebookingsetup_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotebookingsetup_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_quotebookingsetup_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotebookingsetup_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotebookingsetup_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotebookingsetup_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotebookingsetup_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotebookingsetup_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_quotebookingsetup_ProcessSession": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotebookingsetup_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_quotebookingsetup_SyncErrors": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotebookingsetup_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_quotebookingsetupid": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotebookingsetupid = n.getStringValue(); },
            "msdyn_quotedetail_msdyn_quotebookingset": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotedetail_msdyn_quotebookingset = n.getObjectValue<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "msdyn_quotedetailid": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_quotedetailid = n.getStringValue(); },
            "msdyn_recurrencesettings": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_recurrencesettings = n.getStringValue(); },
            "msdyn_revision": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_revision = n.getNumberValue(); },
            "msdyn_timewindowend": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_timewindowend = n.getDateValue(); },
            "msdyn_timewindowstart": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_timewindowstart = n.getDateValue(); },
            "msdyn_worklocation": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_worklocation = n.getNumberValue(); },
            "msdyn_workordersummary": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_workordersummary = n.getStringValue(); },
            "msdyn_workordertype": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).msdyn_workordertype = n.getObjectValue<Msdyn_workordertype>(createMsdyn_workordertypeFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processid": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).processid = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).stageid = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).traversedpath = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_quotebookingsetup).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the importsequencenumber property value. 
     * @returns a integer
     */
    public get importsequencenumber() {
        return this._importsequencenumber;
    };
    /**
     * Sets the importsequencenumber property value. 
     * @param value Value to set for the importsequencenumber property.
     */
    public set importsequencenumber(value: number | undefined) {
        this._importsequencenumber = value;
    };
    /**
     * Gets the modifiedby property value. 
     * @returns a systemuser
     */
    public get modifiedby() {
        return this._modifiedby;
    };
    /**
     * Sets the modifiedby property value. 
     * @param value Value to set for the modifiedby property.
     */
    public set modifiedby(value: Systemuser | undefined) {
        this._modifiedby = value;
    };
    /**
     * Gets the modifiedon property value. 
     * @returns a Date
     */
    public get modifiedon() {
        return this._modifiedon;
    };
    /**
     * Sets the modifiedon property value. 
     * @param value Value to set for the modifiedon property.
     */
    public set modifiedon(value: Date | undefined) {
        this._modifiedon = value;
    };
    /**
     * Gets the modifiedonbehalfby property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfby() {
        return this._modifiedonbehalfby;
    };
    /**
     * Sets the modifiedonbehalfby property value. 
     * @param value Value to set for the modifiedonbehalfby property.
     */
    public set modifiedonbehalfby(value: Systemuser | undefined) {
        this._modifiedonbehalfby = value;
    };
    /**
     * Gets the msdyn_autogeneratebooking property value. 
     * @returns a boolean
     */
    public get msdyn_autogeneratebooking() {
        return this._msdyn_autogeneratebooking;
    };
    /**
     * Sets the msdyn_autogeneratebooking property value. 
     * @param value Value to set for the msdyn_autogeneratebooking property.
     */
    public set msdyn_autogeneratebooking(value: boolean | undefined) {
        this._msdyn_autogeneratebooking = value;
    };
    /**
     * Gets the msdyn_autogenerateworkorder property value. 
     * @returns a boolean
     */
    public get msdyn_autogenerateworkorder() {
        return this._msdyn_autogenerateworkorder;
    };
    /**
     * Sets the msdyn_autogenerateworkorder property value. 
     * @param value Value to set for the msdyn_autogenerateworkorder property.
     */
    public set msdyn_autogenerateworkorder(value: boolean | undefined) {
        this._msdyn_autogenerateworkorder = value;
    };
    /**
     * Gets the msdyn_description property value. 
     * @returns a string
     */
    public get msdyn_description() {
        return this._msdyn_description;
    };
    /**
     * Sets the msdyn_description property value. 
     * @param value Value to set for the msdyn_description property.
     */
    public set msdyn_description(value: string | undefined) {
        this._msdyn_description = value;
    };
    /**
     * Gets the msdyn_estimatedcost property value. 
     * @returns a int64
     */
    public get msdyn_estimatedcost() {
        return this._msdyn_estimatedcost;
    };
    /**
     * Sets the msdyn_estimatedcost property value. 
     * @param value Value to set for the msdyn_estimatedcost property.
     */
    public set msdyn_estimatedcost(value: number | undefined) {
        this._msdyn_estimatedcost = value;
    };
    /**
     * Gets the msdyn_estimatedcost_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedcost_base() {
        return this._msdyn_estimatedcost_base;
    };
    /**
     * Sets the msdyn_estimatedcost_base property value. 
     * @param value Value to set for the msdyn_estimatedcost_base property.
     */
    public set msdyn_estimatedcost_base(value: number | undefined) {
        this._msdyn_estimatedcost_base = value;
    };
    /**
     * Gets the msdyn_estimatedduration property value. 
     * @returns a integer
     */
    public get msdyn_estimatedduration() {
        return this._msdyn_estimatedduration;
    };
    /**
     * Sets the msdyn_estimatedduration property value. 
     * @param value Value to set for the msdyn_estimatedduration property.
     */
    public set msdyn_estimatedduration(value: number | undefined) {
        this._msdyn_estimatedduration = value;
    };
    /**
     * Gets the msdyn_estimatedmargin property value. 
     * @returns a int64
     */
    public get msdyn_estimatedmargin() {
        return this._msdyn_estimatedmargin;
    };
    /**
     * Sets the msdyn_estimatedmargin property value. 
     * @param value Value to set for the msdyn_estimatedmargin property.
     */
    public set msdyn_estimatedmargin(value: number | undefined) {
        this._msdyn_estimatedmargin = value;
    };
    /**
     * Gets the msdyn_estimatedmarginperwo property value. 
     * @returns a int64
     */
    public get msdyn_estimatedmarginperwo() {
        return this._msdyn_estimatedmarginperwo;
    };
    /**
     * Sets the msdyn_estimatedmarginperwo property value. 
     * @param value Value to set for the msdyn_estimatedmarginperwo property.
     */
    public set msdyn_estimatedmarginperwo(value: number | undefined) {
        this._msdyn_estimatedmarginperwo = value;
    };
    /**
     * Gets the msdyn_estimatedproductcost property value. 
     * @returns a int64
     */
    public get msdyn_estimatedproductcost() {
        return this._msdyn_estimatedproductcost;
    };
    /**
     * Sets the msdyn_estimatedproductcost property value. 
     * @param value Value to set for the msdyn_estimatedproductcost property.
     */
    public set msdyn_estimatedproductcost(value: number | undefined) {
        this._msdyn_estimatedproductcost = value;
    };
    /**
     * Gets the msdyn_estimatedproductcost_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedproductcost_base() {
        return this._msdyn_estimatedproductcost_base;
    };
    /**
     * Sets the msdyn_estimatedproductcost_base property value. 
     * @param value Value to set for the msdyn_estimatedproductcost_base property.
     */
    public set msdyn_estimatedproductcost_base(value: number | undefined) {
        this._msdyn_estimatedproductcost_base = value;
    };
    /**
     * Gets the msdyn_estimatedproductrevenue property value. 
     * @returns a int64
     */
    public get msdyn_estimatedproductrevenue() {
        return this._msdyn_estimatedproductrevenue;
    };
    /**
     * Sets the msdyn_estimatedproductrevenue property value. 
     * @param value Value to set for the msdyn_estimatedproductrevenue property.
     */
    public set msdyn_estimatedproductrevenue(value: number | undefined) {
        this._msdyn_estimatedproductrevenue = value;
    };
    /**
     * Gets the msdyn_estimatedproductrevenue_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedproductrevenue_base() {
        return this._msdyn_estimatedproductrevenue_base;
    };
    /**
     * Sets the msdyn_estimatedproductrevenue_base property value. 
     * @param value Value to set for the msdyn_estimatedproductrevenue_base property.
     */
    public set msdyn_estimatedproductrevenue_base(value: number | undefined) {
        this._msdyn_estimatedproductrevenue_base = value;
    };
    /**
     * Gets the msdyn_estimatedrevenue property value. 
     * @returns a int64
     */
    public get msdyn_estimatedrevenue() {
        return this._msdyn_estimatedrevenue;
    };
    /**
     * Sets the msdyn_estimatedrevenue property value. 
     * @param value Value to set for the msdyn_estimatedrevenue property.
     */
    public set msdyn_estimatedrevenue(value: number | undefined) {
        this._msdyn_estimatedrevenue = value;
    };
    /**
     * Gets the msdyn_estimatedrevenue_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedrevenue_base() {
        return this._msdyn_estimatedrevenue_base;
    };
    /**
     * Sets the msdyn_estimatedrevenue_base property value. 
     * @param value Value to set for the msdyn_estimatedrevenue_base property.
     */
    public set msdyn_estimatedrevenue_base(value: number | undefined) {
        this._msdyn_estimatedrevenue_base = value;
    };
    /**
     * Gets the msdyn_estimatedrevenueperwo property value. 
     * @returns a int64
     */
    public get msdyn_estimatedrevenueperwo() {
        return this._msdyn_estimatedrevenueperwo;
    };
    /**
     * Sets the msdyn_estimatedrevenueperwo property value. 
     * @param value Value to set for the msdyn_estimatedrevenueperwo property.
     */
    public set msdyn_estimatedrevenueperwo(value: number | undefined) {
        this._msdyn_estimatedrevenueperwo = value;
    };
    /**
     * Gets the msdyn_estimatedrevenueperwo_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedrevenueperwo_base() {
        return this._msdyn_estimatedrevenueperwo_base;
    };
    /**
     * Sets the msdyn_estimatedrevenueperwo_base property value. 
     * @param value Value to set for the msdyn_estimatedrevenueperwo_base property.
     */
    public set msdyn_estimatedrevenueperwo_base(value: number | undefined) {
        this._msdyn_estimatedrevenueperwo_base = value;
    };
    /**
     * Gets the msdyn_estimatedservicecost property value. 
     * @returns a int64
     */
    public get msdyn_estimatedservicecost() {
        return this._msdyn_estimatedservicecost;
    };
    /**
     * Sets the msdyn_estimatedservicecost property value. 
     * @param value Value to set for the msdyn_estimatedservicecost property.
     */
    public set msdyn_estimatedservicecost(value: number | undefined) {
        this._msdyn_estimatedservicecost = value;
    };
    /**
     * Gets the msdyn_estimatedservicecost_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedservicecost_base() {
        return this._msdyn_estimatedservicecost_base;
    };
    /**
     * Sets the msdyn_estimatedservicecost_base property value. 
     * @param value Value to set for the msdyn_estimatedservicecost_base property.
     */
    public set msdyn_estimatedservicecost_base(value: number | undefined) {
        this._msdyn_estimatedservicecost_base = value;
    };
    /**
     * Gets the msdyn_estimatedservicerevenue property value. 
     * @returns a int64
     */
    public get msdyn_estimatedservicerevenue() {
        return this._msdyn_estimatedservicerevenue;
    };
    /**
     * Sets the msdyn_estimatedservicerevenue property value. 
     * @param value Value to set for the msdyn_estimatedservicerevenue property.
     */
    public set msdyn_estimatedservicerevenue(value: number | undefined) {
        this._msdyn_estimatedservicerevenue = value;
    };
    /**
     * Gets the msdyn_estimatedservicerevenue_base property value. 
     * @returns a int64
     */
    public get msdyn_estimatedservicerevenue_base() {
        return this._msdyn_estimatedservicerevenue_base;
    };
    /**
     * Sets the msdyn_estimatedservicerevenue_base property value. 
     * @param value Value to set for the msdyn_estimatedservicerevenue_base property.
     */
    public set msdyn_estimatedservicerevenue_base(value: number | undefined) {
        this._msdyn_estimatedservicerevenue_base = value;
    };
    /**
     * Gets the msdyn_generateworkorderdaysinadvance property value. 
     * @returns a integer
     */
    public get msdyn_generateworkorderdaysinadvance() {
        return this._msdyn_generateworkorderdaysinadvance;
    };
    /**
     * Sets the msdyn_generateworkorderdaysinadvance property value. 
     * @param value Value to set for the msdyn_generateworkorderdaysinadvance property.
     */
    public set msdyn_generateworkorderdaysinadvance(value: number | undefined) {
        this._msdyn_generateworkorderdaysinadvance = value;
    };
    /**
     * Gets the msdyn_Internalflags property value. 
     * @returns a string
     */
    public get msdyn_Internalflags() {
        return this._msdyn_Internalflags;
    };
    /**
     * Sets the msdyn_Internalflags property value. 
     * @param value Value to set for the msdyn_Internalflags property.
     */
    public set msdyn_Internalflags(value: string | undefined) {
        this._msdyn_Internalflags = value;
    };
    /**
     * Gets the msdyn_latitude property value. 
     * @returns a double
     */
    public get msdyn_latitude() {
        return this._msdyn_latitude;
    };
    /**
     * Sets the msdyn_latitude property value. 
     * @param value Value to set for the msdyn_latitude property.
     */
    public set msdyn_latitude(value: number | undefined) {
        this._msdyn_latitude = value;
    };
    /**
     * Gets the msdyn_longitude property value. 
     * @returns a double
     */
    public get msdyn_longitude() {
        return this._msdyn_longitude;
    };
    /**
     * Sets the msdyn_longitude property value. 
     * @param value Value to set for the msdyn_longitude property.
     */
    public set msdyn_longitude(value: number | undefined) {
        this._msdyn_longitude = value;
    };
    /**
     * Gets the msdyn_margin property value. 
     * @returns a int64
     */
    public get msdyn_margin() {
        return this._msdyn_margin;
    };
    /**
     * Sets the msdyn_margin property value. 
     * @param value Value to set for the msdyn_margin property.
     */
    public set msdyn_margin(value: number | undefined) {
        this._msdyn_margin = value;
    };
    /**
     * Gets the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup property value. 
     * @returns a msdyn_quotebookingincident
     */
    public get msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup() {
        return this._msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup;
    };
    /**
     * Sets the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup property value. 
     * @param value Value to set for the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup property.
     */
    public set msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup(value: Msdyn_quotebookingincident[] | undefined) {
        this._msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup = value;
    };
    /**
     * Gets the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup property value. 
     * @returns a msdyn_quotebookingproduct
     */
    public get msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup() {
        return this._msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup;
    };
    /**
     * Sets the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup property value. 
     * @param value Value to set for the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup property.
     */
    public set msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup(value: Msdyn_quotebookingproduct[] | undefined) {
        this._msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup = value;
    };
    /**
     * Gets the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup property value. 
     * @returns a msdyn_quotebookingservice
     */
    public get msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup() {
        return this._msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup;
    };
    /**
     * Sets the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup property value. 
     * @param value Value to set for the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup property.
     */
    public set msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup(value: Msdyn_quotebookingservice[] | undefined) {
        this._msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup = value;
    };
    /**
     * Gets the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup property value. 
     * @returns a msdyn_quotebookingservicetask
     */
    public get msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup() {
        return this._msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup;
    };
    /**
     * Sets the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup property value. 
     * @param value Value to set for the msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup property.
     */
    public set msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup(value: Msdyn_quotebookingservicetask[] | undefined) {
        this._msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup = value;
    };
    /**
     * Gets the msdyn_name property value. 
     * @returns a string
     */
    public get msdyn_name() {
        return this._msdyn_name;
    };
    /**
     * Sets the msdyn_name property value. 
     * @param value Value to set for the msdyn_name property.
     */
    public set msdyn_name(value: string | undefined) {
        this._msdyn_name = value;
    };
    /**
     * Gets the msdyn_numberofwo property value. 
     * @returns a integer
     */
    public get msdyn_numberofwo() {
        return this._msdyn_numberofwo;
    };
    /**
     * Sets the msdyn_numberofwo property value. 
     * @param value Value to set for the msdyn_numberofwo property.
     */
    public set msdyn_numberofwo(value: number | undefined) {
        this._msdyn_numberofwo = value;
    };
    /**
     * Gets the msdyn_postbookingflexibility property value. 
     * @returns a integer
     */
    public get msdyn_postbookingflexibility() {
        return this._msdyn_postbookingflexibility;
    };
    /**
     * Sets the msdyn_postbookingflexibility property value. 
     * @param value Value to set for the msdyn_postbookingflexibility property.
     */
    public set msdyn_postbookingflexibility(value: number | undefined) {
        this._msdyn_postbookingflexibility = value;
    };
    /**
     * Gets the msdyn_postponegenerationuntil property value. 
     * @returns a Date
     */
    public get msdyn_postponegenerationuntil() {
        return this._msdyn_postponegenerationuntil;
    };
    /**
     * Sets the msdyn_postponegenerationuntil property value. 
     * @param value Value to set for the msdyn_postponegenerationuntil property.
     */
    public set msdyn_postponegenerationuntil(value: Date | undefined) {
        this._msdyn_postponegenerationuntil = value;
    };
    /**
     * Gets the msdyn_prebookingflexibility property value. 
     * @returns a integer
     */
    public get msdyn_prebookingflexibility() {
        return this._msdyn_prebookingflexibility;
    };
    /**
     * Sets the msdyn_prebookingflexibility property value. 
     * @param value Value to set for the msdyn_prebookingflexibility property.
     */
    public set msdyn_prebookingflexibility(value: number | undefined) {
        this._msdyn_prebookingflexibility = value;
    };
    /**
     * Gets the msdyn_preferredresource property value. 
     * @returns a bookableresource
     */
    public get msdyn_preferredresource() {
        return this._msdyn_preferredresource;
    };
    /**
     * Sets the msdyn_preferredresource property value. 
     * @param value Value to set for the msdyn_preferredresource property.
     */
    public set msdyn_preferredresource(value: Bookableresource | undefined) {
        this._msdyn_preferredresource = value;
    };
    /**
     * Gets the msdyn_preferredstarttime property value. 
     * @returns a Date
     */
    public get msdyn_preferredstarttime() {
        return this._msdyn_preferredstarttime;
    };
    /**
     * Sets the msdyn_preferredstarttime property value. 
     * @param value Value to set for the msdyn_preferredstarttime property.
     */
    public set msdyn_preferredstarttime(value: Date | undefined) {
        this._msdyn_preferredstarttime = value;
    };
    /**
     * Gets the msdyn_priority property value. 
     * @returns a msdyn_priority
     */
    public get msdyn_priority() {
        return this._msdyn_priority;
    };
    /**
     * Sets the msdyn_priority property value. 
     * @param value Value to set for the msdyn_priority property.
     */
    public set msdyn_priority(value: Msdyn_priority | undefined) {
        this._msdyn_priority = value;
    };
    /**
     * Gets the msdyn_quote property value. 
     * @returns a quote
     */
    public get msdyn_quote() {
        return this._msdyn_quote;
    };
    /**
     * Sets the msdyn_quote property value. 
     * @param value Value to set for the msdyn_quote property.
     */
    public set msdyn_quote(value: Quote | undefined) {
        this._msdyn_quote = value;
    };
    /**
     * Gets the msdyn_quotebookingsetup_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_quotebookingsetup_AsyncOperations() {
        return this._msdyn_quotebookingsetup_AsyncOperations;
    };
    /**
     * Sets the msdyn_quotebookingsetup_AsyncOperations property value. 
     * @param value Value to set for the msdyn_quotebookingsetup_AsyncOperations property.
     */
    public set msdyn_quotebookingsetup_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_quotebookingsetup_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_quotebookingsetup_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_quotebookingsetup_BulkDeleteFailures() {
        return this._msdyn_quotebookingsetup_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_quotebookingsetup_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_quotebookingsetup_BulkDeleteFailures property.
     */
    public set msdyn_quotebookingsetup_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_quotebookingsetup_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_quotebookingsetup_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotebookingsetup_DuplicateBaseRecord() {
        return this._msdyn_quotebookingsetup_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_quotebookingsetup_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_quotebookingsetup_DuplicateBaseRecord property.
     */
    public set msdyn_quotebookingsetup_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotebookingsetup_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_quotebookingsetup_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotebookingsetup_DuplicateMatchingRecord() {
        return this._msdyn_quotebookingsetup_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_quotebookingsetup_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_quotebookingsetup_DuplicateMatchingRecord property.
     */
    public set msdyn_quotebookingsetup_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotebookingsetup_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_quotebookingsetup_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_quotebookingsetup_MailboxTrackingFolders() {
        return this._msdyn_quotebookingsetup_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_quotebookingsetup_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_quotebookingsetup_MailboxTrackingFolders property.
     */
    public set msdyn_quotebookingsetup_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_quotebookingsetup_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses() {
        return this._msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_quotebookingsetup_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_quotebookingsetup_ProcessSession() {
        return this._msdyn_quotebookingsetup_ProcessSession;
    };
    /**
     * Sets the msdyn_quotebookingsetup_ProcessSession property value. 
     * @param value Value to set for the msdyn_quotebookingsetup_ProcessSession property.
     */
    public set msdyn_quotebookingsetup_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_quotebookingsetup_ProcessSession = value;
    };
    /**
     * Gets the msdyn_quotebookingsetup_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_quotebookingsetup_SyncErrors() {
        return this._msdyn_quotebookingsetup_SyncErrors;
    };
    /**
     * Sets the msdyn_quotebookingsetup_SyncErrors property value. 
     * @param value Value to set for the msdyn_quotebookingsetup_SyncErrors property.
     */
    public set msdyn_quotebookingsetup_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_quotebookingsetup_SyncErrors = value;
    };
    /**
     * Gets the msdyn_quotebookingsetupid property value. 
     * @returns a string
     */
    public get msdyn_quotebookingsetupid() {
        return this._msdyn_quotebookingsetupid;
    };
    /**
     * Sets the msdyn_quotebookingsetupid property value. 
     * @param value Value to set for the msdyn_quotebookingsetupid property.
     */
    public set msdyn_quotebookingsetupid(value: string | undefined) {
        this._msdyn_quotebookingsetupid = value;
    };
    /**
     * Gets the msdyn_quotedetail_msdyn_quotebookingset property value. 
     * @returns a quotedetail
     */
    public get msdyn_quotedetail_msdyn_quotebookingset() {
        return this._msdyn_quotedetail_msdyn_quotebookingset;
    };
    /**
     * Sets the msdyn_quotedetail_msdyn_quotebookingset property value. 
     * @param value Value to set for the msdyn_quotedetail_msdyn_quotebookingset property.
     */
    public set msdyn_quotedetail_msdyn_quotebookingset(value: Quotedetail | undefined) {
        this._msdyn_quotedetail_msdyn_quotebookingset = value;
    };
    /**
     * Gets the msdyn_quotedetailid property value. 
     * @returns a string
     */
    public get msdyn_quotedetailid() {
        return this._msdyn_quotedetailid;
    };
    /**
     * Sets the msdyn_quotedetailid property value. 
     * @param value Value to set for the msdyn_quotedetailid property.
     */
    public set msdyn_quotedetailid(value: string | undefined) {
        this._msdyn_quotedetailid = value;
    };
    /**
     * Gets the msdyn_recurrencesettings property value. 
     * @returns a string
     */
    public get msdyn_recurrencesettings() {
        return this._msdyn_recurrencesettings;
    };
    /**
     * Sets the msdyn_recurrencesettings property value. 
     * @param value Value to set for the msdyn_recurrencesettings property.
     */
    public set msdyn_recurrencesettings(value: string | undefined) {
        this._msdyn_recurrencesettings = value;
    };
    /**
     * Gets the msdyn_revision property value. 
     * @returns a integer
     */
    public get msdyn_revision() {
        return this._msdyn_revision;
    };
    /**
     * Sets the msdyn_revision property value. 
     * @param value Value to set for the msdyn_revision property.
     */
    public set msdyn_revision(value: number | undefined) {
        this._msdyn_revision = value;
    };
    /**
     * Gets the msdyn_timewindowend property value. 
     * @returns a Date
     */
    public get msdyn_timewindowend() {
        return this._msdyn_timewindowend;
    };
    /**
     * Sets the msdyn_timewindowend property value. 
     * @param value Value to set for the msdyn_timewindowend property.
     */
    public set msdyn_timewindowend(value: Date | undefined) {
        this._msdyn_timewindowend = value;
    };
    /**
     * Gets the msdyn_timewindowstart property value. 
     * @returns a Date
     */
    public get msdyn_timewindowstart() {
        return this._msdyn_timewindowstart;
    };
    /**
     * Sets the msdyn_timewindowstart property value. 
     * @param value Value to set for the msdyn_timewindowstart property.
     */
    public set msdyn_timewindowstart(value: Date | undefined) {
        this._msdyn_timewindowstart = value;
    };
    /**
     * Gets the msdyn_worklocation property value. 
     * @returns a integer
     */
    public get msdyn_worklocation() {
        return this._msdyn_worklocation;
    };
    /**
     * Sets the msdyn_worklocation property value. 
     * @param value Value to set for the msdyn_worklocation property.
     */
    public set msdyn_worklocation(value: number | undefined) {
        this._msdyn_worklocation = value;
    };
    /**
     * Gets the msdyn_workordersummary property value. 
     * @returns a string
     */
    public get msdyn_workordersummary() {
        return this._msdyn_workordersummary;
    };
    /**
     * Sets the msdyn_workordersummary property value. 
     * @param value Value to set for the msdyn_workordersummary property.
     */
    public set msdyn_workordersummary(value: string | undefined) {
        this._msdyn_workordersummary = value;
    };
    /**
     * Gets the msdyn_workordertype property value. 
     * @returns a msdyn_workordertype
     */
    public get msdyn_workordertype() {
        return this._msdyn_workordertype;
    };
    /**
     * Sets the msdyn_workordertype property value. 
     * @param value Value to set for the msdyn_workordertype property.
     */
    public set msdyn_workordertype(value: Msdyn_workordertype | undefined) {
        this._msdyn_workordertype = value;
    };
    /**
     * Gets the overriddencreatedon property value. 
     * @returns a Date
     */
    public get overriddencreatedon() {
        return this._overriddencreatedon;
    };
    /**
     * Sets the overriddencreatedon property value. 
     * @param value Value to set for the overriddencreatedon property.
     */
    public set overriddencreatedon(value: Date | undefined) {
        this._overriddencreatedon = value;
    };
    /**
     * Gets the ownerid property value. 
     * @returns a principal
     */
    public get ownerid() {
        return this._ownerid;
    };
    /**
     * Sets the ownerid property value. 
     * @param value Value to set for the ownerid property.
     */
    public set ownerid(value: Principal | undefined) {
        this._ownerid = value;
    };
    /**
     * Gets the owningbusinessunit property value. 
     * @returns a businessunit
     */
    public get owningbusinessunit() {
        return this._owningbusinessunit;
    };
    /**
     * Sets the owningbusinessunit property value. 
     * @param value Value to set for the owningbusinessunit property.
     */
    public set owningbusinessunit(value: Businessunit | undefined) {
        this._owningbusinessunit = value;
    };
    /**
     * Gets the owningteam property value. 
     * @returns a team
     */
    public get owningteam() {
        return this._owningteam;
    };
    /**
     * Sets the owningteam property value. 
     * @param value Value to set for the owningteam property.
     */
    public set owningteam(value: Team | undefined) {
        this._owningteam = value;
    };
    /**
     * Gets the owninguser property value. 
     * @returns a systemuser
     */
    public get owninguser() {
        return this._owninguser;
    };
    /**
     * Sets the owninguser property value. 
     * @param value Value to set for the owninguser property.
     */
    public set owninguser(value: Systemuser | undefined) {
        this._owninguser = value;
    };
    /**
     * Gets the processid property value. 
     * @returns a string
     */
    public get processid() {
        return this._processid;
    };
    /**
     * Sets the processid property value. 
     * @param value Value to set for the processid property.
     */
    public set processid(value: string | undefined) {
        this._processid = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_msdyn_preferredresource_value", this._msdyn_preferredresource_value);
        writer.writeStringValue("_msdyn_priority_value", this._msdyn_priority_value);
        writer.writeStringValue("_msdyn_quote_value", this._msdyn_quote_value);
        writer.writeStringValue("_msdyn_quotedetail_msdyn_quotebookingset_value", this._msdyn_quotedetail_msdyn_quotebookingset_value);
        writer.writeStringValue("_msdyn_workordertype_value", this._msdyn_workordertype_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_stageid_value", this._stageid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeBooleanValue("msdyn_autogeneratebooking", this.msdyn_autogeneratebooking);
        writer.writeBooleanValue("msdyn_autogenerateworkorder", this.msdyn_autogenerateworkorder);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeNumberValue("msdyn_estimatedcost", this.msdyn_estimatedcost);
        writer.writeNumberValue("msdyn_estimatedcost_base", this.msdyn_estimatedcost_base);
        writer.writeNumberValue("msdyn_estimatedduration", this.msdyn_estimatedduration);
        writer.writeNumberValue("msdyn_estimatedmargin", this.msdyn_estimatedmargin);
        writer.writeNumberValue("msdyn_estimatedmarginperwo", this.msdyn_estimatedmarginperwo);
        writer.writeNumberValue("msdyn_estimatedproductcost", this.msdyn_estimatedproductcost);
        writer.writeNumberValue("msdyn_estimatedproductcost_base", this.msdyn_estimatedproductcost_base);
        writer.writeNumberValue("msdyn_estimatedproductrevenue", this.msdyn_estimatedproductrevenue);
        writer.writeNumberValue("msdyn_estimatedproductrevenue_base", this.msdyn_estimatedproductrevenue_base);
        writer.writeNumberValue("msdyn_estimatedrevenue", this.msdyn_estimatedrevenue);
        writer.writeNumberValue("msdyn_estimatedrevenue_base", this.msdyn_estimatedrevenue_base);
        writer.writeNumberValue("msdyn_estimatedrevenueperwo", this.msdyn_estimatedrevenueperwo);
        writer.writeNumberValue("msdyn_estimatedrevenueperwo_base", this.msdyn_estimatedrevenueperwo_base);
        writer.writeNumberValue("msdyn_estimatedservicecost", this.msdyn_estimatedservicecost);
        writer.writeNumberValue("msdyn_estimatedservicecost_base", this.msdyn_estimatedservicecost_base);
        writer.writeNumberValue("msdyn_estimatedservicerevenue", this.msdyn_estimatedservicerevenue);
        writer.writeNumberValue("msdyn_estimatedservicerevenue_base", this.msdyn_estimatedservicerevenue_base);
        writer.writeNumberValue("msdyn_generateworkorderdaysinadvance", this.msdyn_generateworkorderdaysinadvance);
        writer.writeStringValue("msdyn_Internalflags", this.msdyn_Internalflags);
        writer.writeNumberValue("msdyn_latitude", this.msdyn_latitude);
        writer.writeNumberValue("msdyn_longitude", this.msdyn_longitude);
        writer.writeNumberValue("msdyn_margin", this.msdyn_margin);
        writer.writeCollectionOfObjectValues<Msdyn_quotebookingincident>("msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup", this.msdyn_msdyn_quotebookingsetup_msdyn_quotebookingincident_QuoteBookingSetup);
        writer.writeCollectionOfObjectValues<Msdyn_quotebookingproduct>("msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup", this.msdyn_msdyn_quotebookingsetup_msdyn_quotebookingproduct_QuoteBookingSetup);
        writer.writeCollectionOfObjectValues<Msdyn_quotebookingservice>("msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup", this.msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservice_QuoteBookingSetup);
        writer.writeCollectionOfObjectValues<Msdyn_quotebookingservicetask>("msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup", this.msdyn_msdyn_quotebookingsetup_msdyn_quotebookingservicetask_QuoteBookingSetup);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeNumberValue("msdyn_numberofwo", this.msdyn_numberofwo);
        writer.writeNumberValue("msdyn_postbookingflexibility", this.msdyn_postbookingflexibility);
        writer.writeDateValue("msdyn_postponegenerationuntil", this.msdyn_postponegenerationuntil);
        writer.writeNumberValue("msdyn_prebookingflexibility", this.msdyn_prebookingflexibility);
        writer.writeObjectValue<Bookableresource>("msdyn_preferredresource", this.msdyn_preferredresource);
        writer.writeDateValue("msdyn_preferredstarttime", this.msdyn_preferredstarttime);
        writer.writeObjectValue<Msdyn_priority>("msdyn_priority", this.msdyn_priority);
        writer.writeObjectValue<Quote>("msdyn_quote", this.msdyn_quote);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_quotebookingsetup_AsyncOperations", this.msdyn_quotebookingsetup_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_quotebookingsetup_BulkDeleteFailures", this.msdyn_quotebookingsetup_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotebookingsetup_DuplicateBaseRecord", this.msdyn_quotebookingsetup_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotebookingsetup_DuplicateMatchingRecord", this.msdyn_quotebookingsetup_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_quotebookingsetup_MailboxTrackingFolders", this.msdyn_quotebookingsetup_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses", this.msdyn_quotebookingsetup_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_quotebookingsetup_ProcessSession", this.msdyn_quotebookingsetup_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_quotebookingsetup_SyncErrors", this.msdyn_quotebookingsetup_SyncErrors);
        writer.writeStringValue("msdyn_quotebookingsetupid", this.msdyn_quotebookingsetupid);
        writer.writeObjectValue<Quotedetail>("msdyn_quotedetail_msdyn_quotebookingset", this.msdyn_quotedetail_msdyn_quotebookingset);
        writer.writeStringValue("msdyn_quotedetailid", this.msdyn_quotedetailid);
        writer.writeStringValue("msdyn_recurrencesettings", this.msdyn_recurrencesettings);
        writer.writeNumberValue("msdyn_revision", this.msdyn_revision);
        writer.writeDateValue("msdyn_timewindowend", this.msdyn_timewindowend);
        writer.writeDateValue("msdyn_timewindowstart", this.msdyn_timewindowstart);
        writer.writeNumberValue("msdyn_worklocation", this.msdyn_worklocation);
        writer.writeStringValue("msdyn_workordersummary", this.msdyn_workordersummary);
        writer.writeObjectValue<Msdyn_workordertype>("msdyn_workordertype", this.msdyn_workordertype);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeStringValue("processid", this.processid);
        writer.writeObjectValue<Processstage>("stageid", this.stageid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the stageid property value. 
     * @returns a processstage
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: Processstage | undefined) {
        this._stageid = value;
    };
    /**
     * Gets the statecode property value. 
     * @returns a integer
     */
    public get statecode() {
        return this._statecode;
    };
    /**
     * Sets the statecode property value. 
     * @param value Value to set for the statecode property.
     */
    public set statecode(value: number | undefined) {
        this._statecode = value;
    };
    /**
     * Gets the statuscode property value. 
     * @returns a integer
     */
    public get statuscode() {
        return this._statuscode;
    };
    /**
     * Sets the statuscode property value. 
     * @param value Value to set for the statuscode property.
     */
    public set statuscode(value: number | undefined) {
        this._statuscode = value;
    };
    /**
     * Gets the timezoneruleversionnumber property value. 
     * @returns a integer
     */
    public get timezoneruleversionnumber() {
        return this._timezoneruleversionnumber;
    };
    /**
     * Sets the timezoneruleversionnumber property value. 
     * @param value Value to set for the timezoneruleversionnumber property.
     */
    public set timezoneruleversionnumber(value: number | undefined) {
        this._timezoneruleversionnumber = value;
    };
    /**
     * Gets the transactioncurrencyid property value. 
     * @returns a transactioncurrency
     */
    public get transactioncurrencyid() {
        return this._transactioncurrencyid;
    };
    /**
     * Sets the transactioncurrencyid property value. 
     * @param value Value to set for the transactioncurrencyid property.
     */
    public set transactioncurrencyid(value: Transactioncurrency | undefined) {
        this._transactioncurrencyid = value;
    };
    /**
     * Gets the traversedpath property value. 
     * @returns a string
     */
    public get traversedpath() {
        return this._traversedpath;
    };
    /**
     * Sets the traversedpath property value. 
     * @param value Value to set for the traversedpath property.
     */
    public set traversedpath(value: string | undefined) {
        this._traversedpath = value;
    };
    /**
     * Gets the utcconversiontimezonecode property value. 
     * @returns a integer
     */
    public get utcconversiontimezonecode() {
        return this._utcconversiontimezonecode;
    };
    /**
     * Sets the utcconversiontimezonecode property value. 
     * @param value Value to set for the utcconversiontimezonecode property.
     */
    public set utcconversiontimezonecode(value: number | undefined) {
        this._utcconversiontimezonecode = value;
    };
    /**
     * Gets the versionnumber property value. 
     * @returns a int64
     */
    public get versionnumber() {
        return this._versionnumber;
    };
    /**
     * Sets the versionnumber property value. 
     * @param value Value to set for the versionnumber property.
     */
    public set versionnumber(value: number | undefined) {
        this._versionnumber = value;
    };
}
