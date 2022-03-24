import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Annotation, Asyncoperation, Bookableresource, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bookableresourcecategoryassn extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __resource_value?: string | undefined;
    private __resourcecategory_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _bookableresourcecategoryassn_Annotations?: Annotation[] | undefined;
    private _bookableresourcecategoryassn_AsyncOperations?: Asyncoperation[] | undefined;
    private _bookableresourcecategoryassn_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _bookableresourcecategoryassn_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcecategoryassn_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcecategoryassn_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _bookableresourcecategoryassn_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _bookableresourcecategoryassn_ProcessSession?: Processsession[] | undefined;
    private _bookableResourceCategoryAssn_SyncErrors?: Syncerror[] | undefined;
    private _bookableresourcecategoryassnid?: string | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _msdyn_isdefault?: boolean | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _resource?: Bookableresource | undefined;
    private _resourceCategory?: Bookableresourcecategory | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
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
     * Gets the _resource_value property value. 
     * @returns a string
     */
    public get _resource_value() {
        return this.__resource_value;
    };
    /**
     * Sets the _resource_value property value. 
     * @param value Value to set for the _resource_value property.
     */
    public set _resource_value(value: string | undefined) {
        this.__resource_value = value;
    };
    /**
     * Gets the _resourcecategory_value property value. 
     * @returns a string
     */
    public get _resourcecategory_value() {
        return this.__resourcecategory_value;
    };
    /**
     * Sets the _resourcecategory_value property value. 
     * @param value Value to set for the _resourcecategory_value property.
     */
    public set _resourcecategory_value(value: string | undefined) {
        this.__resourcecategory_value = value;
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
     * Gets the bookableresourcecategoryassn_Annotations property value. 
     * @returns a annotation
     */
    public get bookableresourcecategoryassn_Annotations() {
        return this._bookableresourcecategoryassn_Annotations;
    };
    /**
     * Sets the bookableresourcecategoryassn_Annotations property value. 
     * @param value Value to set for the bookableresourcecategoryassn_Annotations property.
     */
    public set bookableresourcecategoryassn_Annotations(value: Annotation[] | undefined) {
        this._bookableresourcecategoryassn_Annotations = value;
    };
    /**
     * Gets the bookableresourcecategoryassn_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get bookableresourcecategoryassn_AsyncOperations() {
        return this._bookableresourcecategoryassn_AsyncOperations;
    };
    /**
     * Sets the bookableresourcecategoryassn_AsyncOperations property value. 
     * @param value Value to set for the bookableresourcecategoryassn_AsyncOperations property.
     */
    public set bookableresourcecategoryassn_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._bookableresourcecategoryassn_AsyncOperations = value;
    };
    /**
     * Gets the bookableresourcecategoryassn_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get bookableresourcecategoryassn_BulkDeleteFailures() {
        return this._bookableresourcecategoryassn_BulkDeleteFailures;
    };
    /**
     * Sets the bookableresourcecategoryassn_BulkDeleteFailures property value. 
     * @param value Value to set for the bookableresourcecategoryassn_BulkDeleteFailures property.
     */
    public set bookableresourcecategoryassn_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._bookableresourcecategoryassn_BulkDeleteFailures = value;
    };
    /**
     * Gets the bookableresourcecategoryassn_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcecategoryassn_DuplicateBaseRecord() {
        return this._bookableresourcecategoryassn_DuplicateBaseRecord;
    };
    /**
     * Sets the bookableresourcecategoryassn_DuplicateBaseRecord property value. 
     * @param value Value to set for the bookableresourcecategoryassn_DuplicateBaseRecord property.
     */
    public set bookableresourcecategoryassn_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcecategoryassn_DuplicateBaseRecord = value;
    };
    /**
     * Gets the bookableresourcecategoryassn_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcecategoryassn_DuplicateMatchingRecord() {
        return this._bookableresourcecategoryassn_DuplicateMatchingRecord;
    };
    /**
     * Sets the bookableresourcecategoryassn_DuplicateMatchingRecord property value. 
     * @param value Value to set for the bookableresourcecategoryassn_DuplicateMatchingRecord property.
     */
    public set bookableresourcecategoryassn_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcecategoryassn_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the bookableresourcecategoryassn_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get bookableresourcecategoryassn_MailboxTrackingFolders() {
        return this._bookableresourcecategoryassn_MailboxTrackingFolders;
    };
    /**
     * Sets the bookableresourcecategoryassn_MailboxTrackingFolders property value. 
     * @param value Value to set for the bookableresourcecategoryassn_MailboxTrackingFolders property.
     */
    public set bookableresourcecategoryassn_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._bookableresourcecategoryassn_MailboxTrackingFolders = value;
    };
    /**
     * Gets the bookableresourcecategoryassn_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get bookableresourcecategoryassn_PrincipalObjectAttributeAccesses() {
        return this._bookableresourcecategoryassn_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the bookableresourcecategoryassn_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the bookableresourcecategoryassn_PrincipalObjectAttributeAccesses property.
     */
    public set bookableresourcecategoryassn_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._bookableresourcecategoryassn_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the bookableresourcecategoryassn_ProcessSession property value. 
     * @returns a processsession
     */
    public get bookableresourcecategoryassn_ProcessSession() {
        return this._bookableresourcecategoryassn_ProcessSession;
    };
    /**
     * Sets the bookableresourcecategoryassn_ProcessSession property value. 
     * @param value Value to set for the bookableresourcecategoryassn_ProcessSession property.
     */
    public set bookableresourcecategoryassn_ProcessSession(value: Processsession[] | undefined) {
        this._bookableresourcecategoryassn_ProcessSession = value;
    };
    /**
     * Gets the bookableResourceCategoryAssn_SyncErrors property value. 
     * @returns a syncerror
     */
    public get bookableResourceCategoryAssn_SyncErrors() {
        return this._bookableResourceCategoryAssn_SyncErrors;
    };
    /**
     * Sets the bookableResourceCategoryAssn_SyncErrors property value. 
     * @param value Value to set for the BookableResourceCategoryAssn_SyncErrors property.
     */
    public set bookableResourceCategoryAssn_SyncErrors(value: Syncerror[] | undefined) {
        this._bookableResourceCategoryAssn_SyncErrors = value;
    };
    /**
     * Gets the bookableresourcecategoryassnid property value. 
     * @returns a string
     */
    public get bookableresourcecategoryassnid() {
        return this._bookableresourcecategoryassnid;
    };
    /**
     * Sets the bookableresourcecategoryassnid property value. 
     * @param value Value to set for the bookableresourcecategoryassnid property.
     */
    public set bookableresourcecategoryassnid(value: string | undefined) {
        this._bookableresourcecategoryassnid = value;
    };
    /**
     * Instantiates a new bookableresourcecategoryassn and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdbyname property value. 
     * @returns a systemuser
     */
    public get createdbyname() {
        return this._createdbyname;
    };
    /**
     * Sets the createdbyname property value. 
     * @param value Value to set for the createdbyname property.
     */
    public set createdbyname(value: Systemuser | undefined) {
        this._createdbyname = value;
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
     * Gets the createdonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get createdonbehalfbyname() {
        return this._createdonbehalfbyname;
    };
    /**
     * Sets the createdonbehalfbyname property value. 
     * @param value Value to set for the createdonbehalfbyname property.
     */
    public set createdonbehalfbyname(value: Systemuser | undefined) {
        this._createdonbehalfbyname = value;
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
            "_createdby_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._owninguser_value = n.getStringValue(); },
            "_resource_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._resource_value = n.getStringValue(); },
            "_resourcecategory_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._resourcecategory_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Bookableresourcecategoryassn)._transactioncurrencyid_value = n.getStringValue(); },
            "bookableresourcecategoryassn_Annotations": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableresourcecategoryassn_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "bookableresourcecategoryassn_AsyncOperations": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableresourcecategoryassn_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bookableresourcecategoryassn_BulkDeleteFailures": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableresourcecategoryassn_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bookableresourcecategoryassn_DuplicateBaseRecord": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableresourcecategoryassn_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcecategoryassn_DuplicateMatchingRecord": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableresourcecategoryassn_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcecategoryassn_MailboxTrackingFolders": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableresourcecategoryassn_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "bookableresourcecategoryassn_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableresourcecategoryassn_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "bookableresourcecategoryassn_ProcessSession": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableresourcecategoryassn_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "bookableResourceCategoryAssn_SyncErrors": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableResourceCategoryAssn_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "bookableresourcecategoryassnid": (o, n) => { (o as unknown as Bookableresourcecategoryassn).bookableresourcecategoryassnid = n.getStringValue(); },
            "createdbyname": (o, n) => { (o as unknown as Bookableresourcecategoryassn).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Bookableresourcecategoryassn).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcecategoryassn).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Bookableresourcecategoryassn).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Bookableresourcecategoryassn).importsequencenumber = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Bookableresourcecategoryassn).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Bookableresourcecategoryassn).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcecategoryassn).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_isdefault": (o, n) => { (o as unknown as Bookableresourcecategoryassn).msdyn_isdefault = n.getBooleanValue(); },
            "name": (o, n) => { (o as unknown as Bookableresourcecategoryassn).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Bookableresourcecategoryassn).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Bookableresourcecategoryassn).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Bookableresourcecategoryassn).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Bookableresourcecategoryassn).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Bookableresourcecategoryassn).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "resource": (o, n) => { (o as unknown as Bookableresourcecategoryassn).resource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "resourceCategory": (o, n) => { (o as unknown as Bookableresourcecategoryassn).resourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Bookableresourcecategoryassn).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Bookableresourcecategoryassn).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Bookableresourcecategoryassn).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Bookableresourcecategoryassn).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Bookableresourcecategoryassn).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Bookableresourcecategoryassn).versionnumber = n.getNumberValue(); },
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
     * Gets the modifiedbyname property value. 
     * @returns a systemuser
     */
    public get modifiedbyname() {
        return this._modifiedbyname;
    };
    /**
     * Sets the modifiedbyname property value. 
     * @param value Value to set for the modifiedbyname property.
     */
    public set modifiedbyname(value: Systemuser | undefined) {
        this._modifiedbyname = value;
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
     * Gets the modifiedonbehalfbyname property value. 
     * @returns a systemuser
     */
    public get modifiedonbehalfbyname() {
        return this._modifiedonbehalfbyname;
    };
    /**
     * Sets the modifiedonbehalfbyname property value. 
     * @param value Value to set for the modifiedonbehalfbyname property.
     */
    public set modifiedonbehalfbyname(value: Systemuser | undefined) {
        this._modifiedonbehalfbyname = value;
    };
    /**
     * Gets the msdyn_isdefault property value. 
     * @returns a boolean
     */
    public get msdyn_isdefault() {
        return this._msdyn_isdefault;
    };
    /**
     * Sets the msdyn_isdefault property value. 
     * @param value Value to set for the msdyn_isdefault property.
     */
    public set msdyn_isdefault(value: boolean | undefined) {
        this._msdyn_isdefault = value;
    };
    /**
     * Gets the name property value. 
     * @returns a string
     */
    public get name() {
        return this._name;
    };
    /**
     * Sets the name property value. 
     * @param value Value to set for the name property.
     */
    public set name(value: string | undefined) {
        this._name = value;
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
     * Gets the resource property value. 
     * @returns a bookableresource
     */
    public get resource() {
        return this._resource;
    };
    /**
     * Sets the resource property value. 
     * @param value Value to set for the Resource property.
     */
    public set resource(value: Bookableresource | undefined) {
        this._resource = value;
    };
    /**
     * Gets the resourceCategory property value. 
     * @returns a bookableresourcecategory
     */
    public get resourceCategory() {
        return this._resourceCategory;
    };
    /**
     * Sets the resourceCategory property value. 
     * @param value Value to set for the ResourceCategory property.
     */
    public set resourceCategory(value: Bookableresourcecategory | undefined) {
        this._resourceCategory = value;
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
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_resource_value", this._resource_value);
        writer.writeStringValue("_resourcecategory_value", this._resourcecategory_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Annotation>("bookableresourcecategoryassn_Annotations", this.bookableresourcecategoryassn_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("bookableresourcecategoryassn_AsyncOperations", this.bookableresourcecategoryassn_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bookableresourcecategoryassn_BulkDeleteFailures", this.bookableresourcecategoryassn_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcecategoryassn_DuplicateBaseRecord", this.bookableresourcecategoryassn_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcecategoryassn_DuplicateMatchingRecord", this.bookableresourcecategoryassn_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("bookableresourcecategoryassn_MailboxTrackingFolders", this.bookableresourcecategoryassn_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("bookableresourcecategoryassn_PrincipalObjectAttributeAccesses", this.bookableresourcecategoryassn_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("bookableresourcecategoryassn_ProcessSession", this.bookableresourcecategoryassn_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("bookableResourceCategoryAssn_SyncErrors", this.bookableResourceCategoryAssn_SyncErrors);
        writer.writeStringValue("bookableresourcecategoryassnid", this.bookableresourcecategoryassnid);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeBooleanValue("msdyn_isdefault", this.msdyn_isdefault);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Bookableresource>("resource", this.resource);
        writer.writeObjectValue<Bookableresourcecategory>("resourceCategory", this.resourceCategory);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
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
