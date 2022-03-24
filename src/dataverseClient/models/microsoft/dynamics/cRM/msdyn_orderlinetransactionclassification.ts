import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_orderlineresourcecategoryFromDiscriminatorValue} from './createMsdyn_orderlineresourcecategoryFromDiscriminatorValue';
import {createMsdyn_orderlinetransactioncategoryFromDiscriminatorValue} from './createMsdyn_orderlinetransactioncategoryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_orderlineresourcecategory, Msdyn_orderlinetransactioncategory, Principal, Principalobjectattributeaccess, Processsession, Salesorderdetail, Syncerror, Systemuser, Team} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_orderlinetransactionclassification extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_contractlineid_value?: string | undefined;
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
    private _msdyn_description?: string | undefined;
    private _msdyn_include?: boolean | undefined;
    private _msdyn_orderlinetransactionclassification_Annotations?: Annotation[] | undefined;
    private _msdyn_orderlinetransactionclassification_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_orderlinetransactionclassification_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_orderlinetransactionclassification_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_orderlinetransactionclassification_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_orderlinetransactionclassification_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla?: Msdyn_orderlineresourcecategory[] | undefined;
    private _msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction?: Msdyn_orderlinetransactioncategory[] | undefined;
    private _msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_orderlinetransactionclassification_ProcessSession?: Processsession[] | undefined;
    private _msdyn_orderlinetransactionclassification_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_orderlinetransactionclassificationid?: string | undefined;
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
     * Instantiates a new msdyn_orderlinetransactionclassification and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_contractlineid_value": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification)._msdyn_contractlineid_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification)._owninguser_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_billingtype": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_billingtype = n.getNumberValue(); },
            "msdyn_contractline": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_contractline = n.getStringValue(); },
            "msdyn_ContractLineId": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_ContractLineId = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_description": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_description = n.getStringValue(); },
            "msdyn_include": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_include = n.getBooleanValue(); },
            "msdyn_orderlinetransactionclassification_Annotations": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_AsyncOperations": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla = n.getCollectionOfObjectValues<Msdyn_orderlineresourcecategory>(createMsdyn_orderlineresourcecategoryFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction = n.getCollectionOfObjectValues<Msdyn_orderlinetransactioncategory>(createMsdyn_orderlinetransactioncategoryFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_ProcessSession": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassification_SyncErrors": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassification_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_orderlinetransactionclassificationid": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_orderlinetransactionclassificationid = n.getStringValue(); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).msdyn_transactionclassification = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).timezoneruleversionnumber = n.getNumberValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_orderlinetransactionclassification).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_include property value. 
     * @returns a boolean
     */
    public get msdyn_include() {
        return this._msdyn_include;
    };
    /**
     * Sets the msdyn_include property value. 
     * @param value Value to set for the msdyn_include property.
     */
    public set msdyn_include(value: boolean | undefined) {
        this._msdyn_include = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_orderlinetransactionclassification_Annotations() {
        return this._msdyn_orderlinetransactionclassification_Annotations;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_Annotations property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_Annotations property.
     */
    public set msdyn_orderlinetransactionclassification_Annotations(value: Annotation[] | undefined) {
        this._msdyn_orderlinetransactionclassification_Annotations = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_orderlinetransactionclassification_AsyncOperations() {
        return this._msdyn_orderlinetransactionclassification_AsyncOperations;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_AsyncOperations property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_AsyncOperations property.
     */
    public set msdyn_orderlinetransactionclassification_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_orderlinetransactionclassification_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_orderlinetransactionclassification_BulkDeleteFailures() {
        return this._msdyn_orderlinetransactionclassification_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_BulkDeleteFailures property.
     */
    public set msdyn_orderlinetransactionclassification_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_orderlinetransactionclassification_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_orderlinetransactionclassification_DuplicateBaseRecord() {
        return this._msdyn_orderlinetransactionclassification_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_DuplicateBaseRecord property.
     */
    public set msdyn_orderlinetransactionclassification_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_orderlinetransactionclassification_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_orderlinetransactionclassification_DuplicateMatchingRecord() {
        return this._msdyn_orderlinetransactionclassification_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_DuplicateMatchingRecord property.
     */
    public set msdyn_orderlinetransactionclassification_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_orderlinetransactionclassification_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_orderlinetransactionclassification_MailboxTrackingFolders() {
        return this._msdyn_orderlinetransactionclassification_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_MailboxTrackingFolders property.
     */
    public set msdyn_orderlinetransactionclassification_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_orderlinetransactionclassification_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla property value. 
     * @returns a msdyn_orderlineresourcecategory
     */
    public get msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla() {
        return this._msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla property.
     */
    public set msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla(value: Msdyn_orderlineresourcecategory[] | undefined) {
        this._msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction property value. 
     * @returns a msdyn_orderlinetransactioncategory
     */
    public get msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction() {
        return this._msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction property.
     */
    public set msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction(value: Msdyn_orderlinetransactioncategory[] | undefined) {
        this._msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses() {
        return this._msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_orderlinetransactionclassification_ProcessSession() {
        return this._msdyn_orderlinetransactionclassification_ProcessSession;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_ProcessSession property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_ProcessSession property.
     */
    public set msdyn_orderlinetransactionclassification_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_orderlinetransactionclassification_ProcessSession = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassification_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_orderlinetransactionclassification_SyncErrors() {
        return this._msdyn_orderlinetransactionclassification_SyncErrors;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassification_SyncErrors property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassification_SyncErrors property.
     */
    public set msdyn_orderlinetransactionclassification_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_orderlinetransactionclassification_SyncErrors = value;
    };
    /**
     * Gets the msdyn_orderlinetransactionclassificationid property value. 
     * @returns a string
     */
    public get msdyn_orderlinetransactionclassificationid() {
        return this._msdyn_orderlinetransactionclassificationid;
    };
    /**
     * Sets the msdyn_orderlinetransactionclassificationid property value. 
     * @param value Value to set for the msdyn_orderlinetransactionclassificationid property.
     */
    public set msdyn_orderlinetransactionclassificationid(value: string | undefined) {
        this._msdyn_orderlinetransactionclassificationid = value;
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
        writer.writeStringValue("msdyn_description", this.msdyn_description);
        writer.writeBooleanValue("msdyn_include", this.msdyn_include);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_orderlinetransactionclassification_Annotations", this.msdyn_orderlinetransactionclassification_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_orderlinetransactionclassification_AsyncOperations", this.msdyn_orderlinetransactionclassification_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_orderlinetransactionclassification_BulkDeleteFailures", this.msdyn_orderlinetransactionclassification_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_orderlinetransactionclassification_DuplicateBaseRecord", this.msdyn_orderlinetransactionclassification_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_orderlinetransactionclassification_DuplicateMatchingRecord", this.msdyn_orderlinetransactionclassification_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_orderlinetransactionclassification_MailboxTrackingFolders", this.msdyn_orderlinetransactionclassification_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Msdyn_orderlineresourcecategory>("msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla", this.msdyn_orderlinetransactionclassification_msdyn_orderlineresourcecategory_ContractLineTransactionCla);
        writer.writeCollectionOfObjectValues<Msdyn_orderlinetransactioncategory>("msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction", this.msdyn_orderlinetransactionclassification_msdyn_orderlinetransactioncategory_ContractLineTransaction);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses", this.msdyn_orderlinetransactionclassification_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_orderlinetransactionclassification_ProcessSession", this.msdyn_orderlinetransactionclassification_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_orderlinetransactionclassification_SyncErrors", this.msdyn_orderlinetransactionclassification_SyncErrors);
        writer.writeStringValue("msdyn_orderlinetransactionclassificationid", this.msdyn_orderlinetransactionclassificationid);
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
