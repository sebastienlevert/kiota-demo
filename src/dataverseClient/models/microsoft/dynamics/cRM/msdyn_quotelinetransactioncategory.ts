import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_quotelinetransactionclassificationFromDiscriminatorValue} from './createMsdyn_quotelinetransactionclassificationFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createQuotedetailFromDiscriminatorValue} from './createQuotedetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_quotelinetransactionclassification, Msdyn_transactioncategory, Principal, Principalobjectattributeaccess, Processsession, Quotedetail, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_quotelinetransactioncategory extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_quotelineid_value?: string | undefined;
    private __msdyn_quotelinetransactionclassification_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_billingtype?: number | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_quoteline?: string | undefined;
    private _msdyn_QuoteLineId?: Quotedetail | undefined;
    private _msdyn_quotelinetransactioncategory_Annotations?: Annotation[] | undefined;
    private _msdyn_quotelinetransactioncategory_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_quotelinetransactioncategory_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_quotelinetransactioncategory_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotelinetransactioncategory_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_quotelinetransactioncategory_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_quotelinetransactioncategory_ProcessSession?: Processsession[] | undefined;
    private _msdyn_quotelinetransactioncategory_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_quotelinetransactioncategoryid?: string | undefined;
    private _msdyn_QuoteLineTransactionClassification?: Msdyn_quotelinetransactionclassification | undefined;
    private _msdyn_TransactionCategory?: Msdyn_transactioncategory | undefined;
    private _msdyn_transactionclassification?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
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
     * Gets the _msdyn_quotelineid_value property value. 
     * @returns a string
     */
    public get _msdyn_quotelineid_value() {
        return this.__msdyn_quotelineid_value;
    };
    /**
     * Sets the _msdyn_quotelineid_value property value. 
     * @param value Value to set for the _msdyn_quotelineid_value property.
     */
    public set _msdyn_quotelineid_value(value: string | undefined) {
        this.__msdyn_quotelineid_value = value;
    };
    /**
     * Gets the _msdyn_quotelinetransactionclassification_value property value. 
     * @returns a string
     */
    public get _msdyn_quotelinetransactionclassification_value() {
        return this.__msdyn_quotelinetransactionclassification_value;
    };
    /**
     * Sets the _msdyn_quotelinetransactionclassification_value property value. 
     * @param value Value to set for the _msdyn_quotelinetransactionclassification_value property.
     */
    public set _msdyn_quotelinetransactionclassification_value(value: string | undefined) {
        this.__msdyn_quotelinetransactionclassification_value = value;
    };
    /**
     * Gets the _msdyn_transactioncategory_value property value. 
     * @returns a string
     */
    public get _msdyn_transactioncategory_value() {
        return this.__msdyn_transactioncategory_value;
    };
    /**
     * Sets the _msdyn_transactioncategory_value property value. 
     * @param value Value to set for the _msdyn_transactioncategory_value property.
     */
    public set _msdyn_transactioncategory_value(value: string | undefined) {
        this.__msdyn_transactioncategory_value = value;
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
     * Instantiates a new msdyn_quotelinetransactioncategory and sets the default values.
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
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_quotelineid_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._msdyn_quotelineid_value = n.getStringValue(); },
            "_msdyn_quotelinetransactionclassification_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._msdyn_quotelinetransactionclassification_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_description = n.getStringValue(); },
            "msdyn_quoteline": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quoteline = n.getStringValue(); },
            "msdyn_QuoteLineId": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_QuoteLineId = n.getObjectValue<Quotedetail>(createQuotedetailFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategory_Annotations": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategory_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategory_AsyncOperations": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategory_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategory_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategory_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategory_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategory_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategory_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategory_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategory_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategory_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategory_ProcessSession": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategory_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategory_SyncErrors": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategory_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_quotelinetransactioncategoryid": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_quotelinetransactioncategoryid = n.getStringValue(); },
            "msdyn_QuoteLineTransactionClassification": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_QuoteLineTransactionClassification = n.getObjectValue<Msdyn_quotelinetransactionclassification>(createMsdyn_quotelinetransactionclassificationFromDiscriminatorValue); },
            "msdyn_TransactionCategory": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_TransactionCategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).msdyn_transactionclassification = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_quotelinetransactioncategory).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_billingtype property value. 
     * @returns a integer
     */
    public get msdyn_billingtype() {
        return this._msdyn_billingtype;
    };
    /**
     * Sets the msdyn_billingtype property value. 
     * @param value Value to set for the msdyn_billingtype property.
     */
    public set msdyn_billingtype(value: number | undefined) {
        this._msdyn_billingtype = value;
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
     * Gets the msdyn_quoteline property value. 
     * @returns a string
     */
    public get msdyn_quoteline() {
        return this._msdyn_quoteline;
    };
    /**
     * Sets the msdyn_quoteline property value. 
     * @param value Value to set for the msdyn_quoteline property.
     */
    public set msdyn_quoteline(value: string | undefined) {
        this._msdyn_quoteline = value;
    };
    /**
     * Gets the msdyn_QuoteLineId property value. 
     * @returns a quotedetail
     */
    public get msdyn_QuoteLineId() {
        return this._msdyn_QuoteLineId;
    };
    /**
     * Sets the msdyn_QuoteLineId property value. 
     * @param value Value to set for the msdyn_QuoteLineId property.
     */
    public set msdyn_QuoteLineId(value: Quotedetail | undefined) {
        this._msdyn_QuoteLineId = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategory_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_quotelinetransactioncategory_Annotations() {
        return this._msdyn_quotelinetransactioncategory_Annotations;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategory_Annotations property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategory_Annotations property.
     */
    public set msdyn_quotelinetransactioncategory_Annotations(value: Annotation[] | undefined) {
        this._msdyn_quotelinetransactioncategory_Annotations = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategory_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_quotelinetransactioncategory_AsyncOperations() {
        return this._msdyn_quotelinetransactioncategory_AsyncOperations;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategory_AsyncOperations property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategory_AsyncOperations property.
     */
    public set msdyn_quotelinetransactioncategory_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_quotelinetransactioncategory_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategory_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_quotelinetransactioncategory_BulkDeleteFailures() {
        return this._msdyn_quotelinetransactioncategory_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategory_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategory_BulkDeleteFailures property.
     */
    public set msdyn_quotelinetransactioncategory_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_quotelinetransactioncategory_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategory_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotelinetransactioncategory_DuplicateBaseRecord() {
        return this._msdyn_quotelinetransactioncategory_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategory_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategory_DuplicateBaseRecord property.
     */
    public set msdyn_quotelinetransactioncategory_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotelinetransactioncategory_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategory_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_quotelinetransactioncategory_DuplicateMatchingRecord() {
        return this._msdyn_quotelinetransactioncategory_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategory_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategory_DuplicateMatchingRecord property.
     */
    public set msdyn_quotelinetransactioncategory_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_quotelinetransactioncategory_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategory_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_quotelinetransactioncategory_MailboxTrackingFolders() {
        return this._msdyn_quotelinetransactioncategory_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategory_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategory_MailboxTrackingFolders property.
     */
    public set msdyn_quotelinetransactioncategory_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_quotelinetransactioncategory_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses() {
        return this._msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategory_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_quotelinetransactioncategory_ProcessSession() {
        return this._msdyn_quotelinetransactioncategory_ProcessSession;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategory_ProcessSession property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategory_ProcessSession property.
     */
    public set msdyn_quotelinetransactioncategory_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_quotelinetransactioncategory_ProcessSession = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategory_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_quotelinetransactioncategory_SyncErrors() {
        return this._msdyn_quotelinetransactioncategory_SyncErrors;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategory_SyncErrors property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategory_SyncErrors property.
     */
    public set msdyn_quotelinetransactioncategory_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_quotelinetransactioncategory_SyncErrors = value;
    };
    /**
     * Gets the msdyn_quotelinetransactioncategoryid property value. 
     * @returns a string
     */
    public get msdyn_quotelinetransactioncategoryid() {
        return this._msdyn_quotelinetransactioncategoryid;
    };
    /**
     * Sets the msdyn_quotelinetransactioncategoryid property value. 
     * @param value Value to set for the msdyn_quotelinetransactioncategoryid property.
     */
    public set msdyn_quotelinetransactioncategoryid(value: string | undefined) {
        this._msdyn_quotelinetransactioncategoryid = value;
    };
    /**
     * Gets the msdyn_QuoteLineTransactionClassification property value. 
     * @returns a msdyn_quotelinetransactionclassification
     */
    public get msdyn_QuoteLineTransactionClassification() {
        return this._msdyn_QuoteLineTransactionClassification;
    };
    /**
     * Sets the msdyn_QuoteLineTransactionClassification property value. 
     * @param value Value to set for the msdyn_QuoteLineTransactionClassification property.
     */
    public set msdyn_QuoteLineTransactionClassification(value: Msdyn_quotelinetransactionclassification | undefined) {
        this._msdyn_QuoteLineTransactionClassification = value;
    };
    /**
     * Gets the msdyn_TransactionCategory property value. 
     * @returns a msdyn_transactioncategory
     */
    public get msdyn_TransactionCategory() {
        return this._msdyn_TransactionCategory;
    };
    /**
     * Sets the msdyn_TransactionCategory property value. 
     * @param value Value to set for the msdyn_TransactionCategory property.
     */
    public set msdyn_TransactionCategory(value: Msdyn_transactioncategory | undefined) {
        this._msdyn_TransactionCategory = value;
    };
    /**
     * Gets the msdyn_transactionclassification property value. 
     * @returns a integer
     */
    public get msdyn_transactionclassification() {
        return this._msdyn_transactionclassification;
    };
    /**
     * Sets the msdyn_transactionclassification property value. 
     * @param value Value to set for the msdyn_transactionclassification property.
     */
    public set msdyn_transactionclassification(value: number | undefined) {
        this._msdyn_transactionclassification = value;
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
        writer.writeStringValue("_msdyn_quotelineid_value", this._msdyn_quotelineid_value);
        writer.writeStringValue("_msdyn_quotelinetransactionclassification_value", this._msdyn_quotelinetransactionclassification_value);
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeNumberValue("msdyn_billingtype", this.msdyn_billingtype);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeStringValue("msdyn_quoteline", this.msdyn_quoteline);
        writer.writeObjectValue<Quotedetail>("msdyn_QuoteLineId", this.msdyn_QuoteLineId);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_quotelinetransactioncategory_Annotations", this.msdyn_quotelinetransactioncategory_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_quotelinetransactioncategory_AsyncOperations", this.msdyn_quotelinetransactioncategory_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_quotelinetransactioncategory_BulkDeleteFailures", this.msdyn_quotelinetransactioncategory_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotelinetransactioncategory_DuplicateBaseRecord", this.msdyn_quotelinetransactioncategory_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_quotelinetransactioncategory_DuplicateMatchingRecord", this.msdyn_quotelinetransactioncategory_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_quotelinetransactioncategory_MailboxTrackingFolders", this.msdyn_quotelinetransactioncategory_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses", this.msdyn_quotelinetransactioncategory_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_quotelinetransactioncategory_ProcessSession", this.msdyn_quotelinetransactioncategory_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_quotelinetransactioncategory_SyncErrors", this.msdyn_quotelinetransactioncategory_SyncErrors);
        writer.writeStringValue("msdyn_quotelinetransactioncategoryid", this.msdyn_quotelinetransactioncategoryid);
        writer.writeObjectValue<Msdyn_quotelinetransactionclassification>("msdyn_QuoteLineTransactionClassification", this.msdyn_QuoteLineTransactionClassification);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_TransactionCategory", this.msdyn_TransactionCategory);
        writer.writeNumberValue("msdyn_transactionclassification", this.msdyn_transactionclassification);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
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
