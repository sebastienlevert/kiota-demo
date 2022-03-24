import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_orderlinetransactionclassificationFromDiscriminatorValue} from './createMsdyn_orderlinetransactionclassificationFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_orderlinetransactionclassification, Principal, Principalobjectattributeaccess, Processsession, Salesorderdetail, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_orderlineresourcecategory extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_contractlineid_value?: string | undefined;
    private __msdyn_contractlinetransactionclassification_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
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
    private _msdyn_contractline?: string | undefined;
    private _msdyn_ContractLineId?: Salesorderdetail | undefined;
    private _msdyn_ContractLineTransactionClassification?: Msdyn_orderlinetransactionclassification | undefined;
    private _msdyn_description?: string | undefined;
    private _msdyn_orderlineresourcecategory_Annotations?: Annotation[] | undefined;
    private _msdyn_orderlineresourcecategory_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_orderlineresourcecategory_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_orderlineresourcecategory_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_orderlineresourcecategory_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_orderlineresourcecategory_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_orderlineresourcecategory_ProcessSession?: Processsession[] | undefined;
    private _msdyn_orderlineresourcecategory_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_orderlineresourcecategoryid?: string | undefined;
    private _msdyn_ResourceCategory?: Bookableresourcecategory | undefined;
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
     * Gets the _msdyn_contractlineid_value property value. 
     * @returns a string
     */
    public get _msdyn_contractlineid_value() {
        return this.__msdyn_contractlineid_value;
    };
    /**
     * Sets the _msdyn_contractlineid_value property value. 
     * @param value Value to set for the _msdyn_contractlineid_value property.
     */
    public set _msdyn_contractlineid_value(value: string | undefined) {
        this.__msdyn_contractlineid_value = value;
    };
    /**
     * Gets the _msdyn_contractlinetransactionclassification_value property value. 
     * @returns a string
     */
    public get _msdyn_contractlinetransactionclassification_value() {
        return this.__msdyn_contractlinetransactionclassification_value;
    };
    /**
     * Sets the _msdyn_contractlinetransactionclassification_value property value. 
     * @param value Value to set for the _msdyn_contractlinetransactionclassification_value property.
     */
    public set _msdyn_contractlinetransactionclassification_value(value: string | undefined) {
        this.__msdyn_contractlinetransactionclassification_value = value;
    };
    /**
     * Gets the _msdyn_resourcecategory_value property value. 
     * @returns a string
     */
    public get _msdyn_resourcecategory_value() {
        return this.__msdyn_resourcecategory_value;
    };
    /**
     * Sets the _msdyn_resourcecategory_value property value. 
     * @param value Value to set for the _msdyn_resourcecategory_value property.
     */
    public set _msdyn_resourcecategory_value(value: string | undefined) {
        this.__msdyn_resourcecategory_value = value;
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
     * Instantiates a new msdyn_orderlineresourcecategory and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_contractlineid_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._msdyn_contractlineid_value = n.getStringValue(); },
            "_msdyn_contractlinetransactionclassification_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._msdyn_contractlinetransactionclassification_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_contractline": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_contractline = n.getStringValue(); },
            "msdyn_ContractLineId": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_ContractLineId = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_ContractLineTransactionClassification": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_ContractLineTransactionClassification = n.getObjectValue<Msdyn_orderlinetransactionclassification>(createMsdyn_orderlinetransactionclassificationFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_description = n.getStringValue(); },
            "msdyn_orderlineresourcecategory_Annotations": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategory_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_orderlineresourcecategory_AsyncOperations": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategory_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_orderlineresourcecategory_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategory_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_orderlineresourcecategory_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategory_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_orderlineresourcecategory_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategory_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_orderlineresourcecategory_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategory_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_orderlineresourcecategory_ProcessSession": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategory_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_orderlineresourcecategory_SyncErrors": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategory_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_orderlineresourcecategoryid": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_orderlineresourcecategoryid = n.getStringValue(); },
            "msdyn_ResourceCategory": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_ResourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).msdyn_transactionclassification = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_orderlineresourcecategory).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_contractline property value. 
     * @returns a string
     */
    public get msdyn_contractline() {
        return this._msdyn_contractline;
    };
    /**
     * Sets the msdyn_contractline property value. 
     * @param value Value to set for the msdyn_contractline property.
     */
    public set msdyn_contractline(value: string | undefined) {
        this._msdyn_contractline = value;
    };
    /**
     * Gets the msdyn_ContractLineId property value. 
     * @returns a salesorderdetail
     */
    public get msdyn_ContractLineId() {
        return this._msdyn_ContractLineId;
    };
    /**
     * Sets the msdyn_ContractLineId property value. 
     * @param value Value to set for the msdyn_ContractLineId property.
     */
    public set msdyn_ContractLineId(value: Salesorderdetail | undefined) {
        this._msdyn_ContractLineId = value;
    };
    /**
     * Gets the msdyn_ContractLineTransactionClassification property value. 
     * @returns a msdyn_orderlinetransactionclassification
     */
    public get msdyn_ContractLineTransactionClassification() {
        return this._msdyn_ContractLineTransactionClassification;
    };
    /**
     * Sets the msdyn_ContractLineTransactionClassification property value. 
     * @param value Value to set for the msdyn_ContractLineTransactionClassification property.
     */
    public set msdyn_ContractLineTransactionClassification(value: Msdyn_orderlinetransactionclassification | undefined) {
        this._msdyn_ContractLineTransactionClassification = value;
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
     * Gets the msdyn_orderlineresourcecategory_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_orderlineresourcecategory_Annotations() {
        return this._msdyn_orderlineresourcecategory_Annotations;
    };
    /**
     * Sets the msdyn_orderlineresourcecategory_Annotations property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategory_Annotations property.
     */
    public set msdyn_orderlineresourcecategory_Annotations(value: Annotation[] | undefined) {
        this._msdyn_orderlineresourcecategory_Annotations = value;
    };
    /**
     * Gets the msdyn_orderlineresourcecategory_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_orderlineresourcecategory_AsyncOperations() {
        return this._msdyn_orderlineresourcecategory_AsyncOperations;
    };
    /**
     * Sets the msdyn_orderlineresourcecategory_AsyncOperations property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategory_AsyncOperations property.
     */
    public set msdyn_orderlineresourcecategory_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_orderlineresourcecategory_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_orderlineresourcecategory_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_orderlineresourcecategory_BulkDeleteFailures() {
        return this._msdyn_orderlineresourcecategory_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_orderlineresourcecategory_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategory_BulkDeleteFailures property.
     */
    public set msdyn_orderlineresourcecategory_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_orderlineresourcecategory_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_orderlineresourcecategory_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_orderlineresourcecategory_DuplicateBaseRecord() {
        return this._msdyn_orderlineresourcecategory_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_orderlineresourcecategory_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategory_DuplicateBaseRecord property.
     */
    public set msdyn_orderlineresourcecategory_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_orderlineresourcecategory_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_orderlineresourcecategory_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_orderlineresourcecategory_DuplicateMatchingRecord() {
        return this._msdyn_orderlineresourcecategory_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_orderlineresourcecategory_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategory_DuplicateMatchingRecord property.
     */
    public set msdyn_orderlineresourcecategory_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_orderlineresourcecategory_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_orderlineresourcecategory_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_orderlineresourcecategory_MailboxTrackingFolders() {
        return this._msdyn_orderlineresourcecategory_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_orderlineresourcecategory_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategory_MailboxTrackingFolders property.
     */
    public set msdyn_orderlineresourcecategory_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_orderlineresourcecategory_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses() {
        return this._msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_orderlineresourcecategory_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_orderlineresourcecategory_ProcessSession() {
        return this._msdyn_orderlineresourcecategory_ProcessSession;
    };
    /**
     * Sets the msdyn_orderlineresourcecategory_ProcessSession property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategory_ProcessSession property.
     */
    public set msdyn_orderlineresourcecategory_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_orderlineresourcecategory_ProcessSession = value;
    };
    /**
     * Gets the msdyn_orderlineresourcecategory_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_orderlineresourcecategory_SyncErrors() {
        return this._msdyn_orderlineresourcecategory_SyncErrors;
    };
    /**
     * Sets the msdyn_orderlineresourcecategory_SyncErrors property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategory_SyncErrors property.
     */
    public set msdyn_orderlineresourcecategory_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_orderlineresourcecategory_SyncErrors = value;
    };
    /**
     * Gets the msdyn_orderlineresourcecategoryid property value. 
     * @returns a string
     */
    public get msdyn_orderlineresourcecategoryid() {
        return this._msdyn_orderlineresourcecategoryid;
    };
    /**
     * Sets the msdyn_orderlineresourcecategoryid property value. 
     * @param value Value to set for the msdyn_orderlineresourcecategoryid property.
     */
    public set msdyn_orderlineresourcecategoryid(value: string | undefined) {
        this._msdyn_orderlineresourcecategoryid = value;
    };
    /**
     * Gets the msdyn_ResourceCategory property value. 
     * @returns a bookableresourcecategory
     */
    public get msdyn_ResourceCategory() {
        return this._msdyn_ResourceCategory;
    };
    /**
     * Sets the msdyn_ResourceCategory property value. 
     * @param value Value to set for the msdyn_ResourceCategory property.
     */
    public set msdyn_ResourceCategory(value: Bookableresourcecategory | undefined) {
        this._msdyn_ResourceCategory = value;
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
        writer.writeStringValue("_msdyn_contractlineid_value", this._msdyn_contractlineid_value);
        writer.writeStringValue("_msdyn_contractlinetransactionclassification_value", this._msdyn_contractlinetransactionclassification_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
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
        writer.writeStringValue("msdyn_contractline", this.msdyn_contractline);
        writer.writeObjectValue<Salesorderdetail>("msdyn_ContractLineId", this.msdyn_ContractLineId);
        writer.writeObjectValue<Msdyn_orderlinetransactionclassification>("msdyn_ContractLineTransactionClassification", this.msdyn_ContractLineTransactionClassification);
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_orderlineresourcecategory_Annotations", this.msdyn_orderlineresourcecategory_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_orderlineresourcecategory_AsyncOperations", this.msdyn_orderlineresourcecategory_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_orderlineresourcecategory_BulkDeleteFailures", this.msdyn_orderlineresourcecategory_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_orderlineresourcecategory_DuplicateBaseRecord", this.msdyn_orderlineresourcecategory_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_orderlineresourcecategory_DuplicateMatchingRecord", this.msdyn_orderlineresourcecategory_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_orderlineresourcecategory_MailboxTrackingFolders", this.msdyn_orderlineresourcecategory_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses", this.msdyn_orderlineresourcecategory_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_orderlineresourcecategory_ProcessSession", this.msdyn_orderlineresourcecategory_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_orderlineresourcecategory_SyncErrors", this.msdyn_orderlineresourcecategory_SyncErrors);
        writer.writeStringValue("msdyn_orderlineresourcecategoryid", this.msdyn_orderlineresourcecategoryid);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_ResourceCategory", this.msdyn_ResourceCategory);
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
