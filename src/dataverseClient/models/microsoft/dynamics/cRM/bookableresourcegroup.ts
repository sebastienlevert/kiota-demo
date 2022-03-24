import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
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
import {Annotation, Asyncoperation, Bookableresource, Bulkdeletefailure, Businessunit, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Bookableresourcegroup extends Crmbaseentity implements Parsable {
    private __childresource_value?: string | undefined;
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentresource_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _bookableresourcegroup_Annotations?: Annotation[] | undefined;
    private _bookableresourcegroup_AsyncOperations?: Asyncoperation[] | undefined;
    private _bookableresourcegroup_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _bookableresourcegroup_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcegroup_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _bookableresourcegroup_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _bookableresourcegroup_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _bookableresourcegroup_ProcessSession?: Processsession[] | undefined;
    private _bookableResourceGroup_SyncErrors?: Syncerror[] | undefined;
    private _bookableresourcegroupid?: string | undefined;
    private _childResource?: Bookableresource | undefined;
    private _createdbyname?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfbyname?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _fromdate?: Date | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedbyname?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfbyname?: Systemuser | undefined;
    private _msdyn_crewmembertype?: number | undefined;
    private _msdyn_internalflags?: string | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentResource?: Bookableresource | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _todate?: Date | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _utcconversiontimezonecode?: number | undefined;
    private _versionnumber?: number | undefined;
    /**
     * Gets the _childresource_value property value. 
     * @returns a string
     */
    public get _childresource_value() {
        return this.__childresource_value;
    };
    /**
     * Sets the _childresource_value property value. 
     * @param value Value to set for the _childresource_value property.
     */
    public set _childresource_value(value: string | undefined) {
        this.__childresource_value = value;
    };
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
     * Gets the _parentresource_value property value. 
     * @returns a string
     */
    public get _parentresource_value() {
        return this.__parentresource_value;
    };
    /**
     * Sets the _parentresource_value property value. 
     * @param value Value to set for the _parentresource_value property.
     */
    public set _parentresource_value(value: string | undefined) {
        this.__parentresource_value = value;
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
     * Gets the bookableresourcegroup_Annotations property value. 
     * @returns a annotation
     */
    public get bookableresourcegroup_Annotations() {
        return this._bookableresourcegroup_Annotations;
    };
    /**
     * Sets the bookableresourcegroup_Annotations property value. 
     * @param value Value to set for the bookableresourcegroup_Annotations property.
     */
    public set bookableresourcegroup_Annotations(value: Annotation[] | undefined) {
        this._bookableresourcegroup_Annotations = value;
    };
    /**
     * Gets the bookableresourcegroup_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get bookableresourcegroup_AsyncOperations() {
        return this._bookableresourcegroup_AsyncOperations;
    };
    /**
     * Sets the bookableresourcegroup_AsyncOperations property value. 
     * @param value Value to set for the bookableresourcegroup_AsyncOperations property.
     */
    public set bookableresourcegroup_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._bookableresourcegroup_AsyncOperations = value;
    };
    /**
     * Gets the bookableresourcegroup_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get bookableresourcegroup_BulkDeleteFailures() {
        return this._bookableresourcegroup_BulkDeleteFailures;
    };
    /**
     * Sets the bookableresourcegroup_BulkDeleteFailures property value. 
     * @param value Value to set for the bookableresourcegroup_BulkDeleteFailures property.
     */
    public set bookableresourcegroup_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._bookableresourcegroup_BulkDeleteFailures = value;
    };
    /**
     * Gets the bookableresourcegroup_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcegroup_DuplicateBaseRecord() {
        return this._bookableresourcegroup_DuplicateBaseRecord;
    };
    /**
     * Sets the bookableresourcegroup_DuplicateBaseRecord property value. 
     * @param value Value to set for the bookableresourcegroup_DuplicateBaseRecord property.
     */
    public set bookableresourcegroup_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcegroup_DuplicateBaseRecord = value;
    };
    /**
     * Gets the bookableresourcegroup_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get bookableresourcegroup_DuplicateMatchingRecord() {
        return this._bookableresourcegroup_DuplicateMatchingRecord;
    };
    /**
     * Sets the bookableresourcegroup_DuplicateMatchingRecord property value. 
     * @param value Value to set for the bookableresourcegroup_DuplicateMatchingRecord property.
     */
    public set bookableresourcegroup_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._bookableresourcegroup_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the bookableresourcegroup_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get bookableresourcegroup_MailboxTrackingFolders() {
        return this._bookableresourcegroup_MailboxTrackingFolders;
    };
    /**
     * Sets the bookableresourcegroup_MailboxTrackingFolders property value. 
     * @param value Value to set for the bookableresourcegroup_MailboxTrackingFolders property.
     */
    public set bookableresourcegroup_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._bookableresourcegroup_MailboxTrackingFolders = value;
    };
    /**
     * Gets the bookableresourcegroup_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get bookableresourcegroup_PrincipalObjectAttributeAccesses() {
        return this._bookableresourcegroup_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the bookableresourcegroup_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the bookableresourcegroup_PrincipalObjectAttributeAccesses property.
     */
    public set bookableresourcegroup_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._bookableresourcegroup_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the bookableresourcegroup_ProcessSession property value. 
     * @returns a processsession
     */
    public get bookableresourcegroup_ProcessSession() {
        return this._bookableresourcegroup_ProcessSession;
    };
    /**
     * Sets the bookableresourcegroup_ProcessSession property value. 
     * @param value Value to set for the bookableresourcegroup_ProcessSession property.
     */
    public set bookableresourcegroup_ProcessSession(value: Processsession[] | undefined) {
        this._bookableresourcegroup_ProcessSession = value;
    };
    /**
     * Gets the bookableResourceGroup_SyncErrors property value. 
     * @returns a syncerror
     */
    public get bookableResourceGroup_SyncErrors() {
        return this._bookableResourceGroup_SyncErrors;
    };
    /**
     * Sets the bookableResourceGroup_SyncErrors property value. 
     * @param value Value to set for the BookableResourceGroup_SyncErrors property.
     */
    public set bookableResourceGroup_SyncErrors(value: Syncerror[] | undefined) {
        this._bookableResourceGroup_SyncErrors = value;
    };
    /**
     * Gets the bookableresourcegroupid property value. 
     * @returns a string
     */
    public get bookableresourcegroupid() {
        return this._bookableresourcegroupid;
    };
    /**
     * Sets the bookableresourcegroupid property value. 
     * @param value Value to set for the bookableresourcegroupid property.
     */
    public set bookableresourcegroupid(value: string | undefined) {
        this._bookableresourcegroupid = value;
    };
    /**
     * Gets the childResource property value. 
     * @returns a bookableresource
     */
    public get childResource() {
        return this._childResource;
    };
    /**
     * Sets the childResource property value. 
     * @param value Value to set for the ChildResource property.
     */
    public set childResource(value: Bookableresource | undefined) {
        this._childResource = value;
    };
    /**
     * Instantiates a new bookableresourcegroup and sets the default values.
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
     * Gets the fromdate property value. 
     * @returns a Date
     */
    public get fromdate() {
        return this._fromdate;
    };
    /**
     * Sets the fromdate property value. 
     * @param value Value to set for the fromdate property.
     */
    public set fromdate(value: Date | undefined) {
        this._fromdate = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "_childresource_value": (o, n) => { (o as unknown as Bookableresourcegroup)._childresource_value = n.getStringValue(); },
            "_createdby_value": (o, n) => { (o as unknown as Bookableresourcegroup)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcegroup)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Bookableresourcegroup)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Bookableresourcegroup)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Bookableresourcegroup)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Bookableresourcegroup)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Bookableresourcegroup)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Bookableresourcegroup)._owninguser_value = n.getStringValue(); },
            "_parentresource_value": (o, n) => { (o as unknown as Bookableresourcegroup)._parentresource_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Bookableresourcegroup)._transactioncurrencyid_value = n.getStringValue(); },
            "bookableresourcegroup_Annotations": (o, n) => { (o as unknown as Bookableresourcegroup).bookableresourcegroup_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "bookableresourcegroup_AsyncOperations": (o, n) => { (o as unknown as Bookableresourcegroup).bookableresourcegroup_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "bookableresourcegroup_BulkDeleteFailures": (o, n) => { (o as unknown as Bookableresourcegroup).bookableresourcegroup_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "bookableresourcegroup_DuplicateBaseRecord": (o, n) => { (o as unknown as Bookableresourcegroup).bookableresourcegroup_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcegroup_DuplicateMatchingRecord": (o, n) => { (o as unknown as Bookableresourcegroup).bookableresourcegroup_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "bookableresourcegroup_MailboxTrackingFolders": (o, n) => { (o as unknown as Bookableresourcegroup).bookableresourcegroup_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "bookableresourcegroup_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Bookableresourcegroup).bookableresourcegroup_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "bookableresourcegroup_ProcessSession": (o, n) => { (o as unknown as Bookableresourcegroup).bookableresourcegroup_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "bookableResourceGroup_SyncErrors": (o, n) => { (o as unknown as Bookableresourcegroup).bookableResourceGroup_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "bookableresourcegroupid": (o, n) => { (o as unknown as Bookableresourcegroup).bookableresourcegroupid = n.getStringValue(); },
            "childResource": (o, n) => { (o as unknown as Bookableresourcegroup).childResource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "createdbyname": (o, n) => { (o as unknown as Bookableresourcegroup).createdbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Bookableresourcegroup).createdon = n.getDateValue(); },
            "createdonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcegroup).createdonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Bookableresourcegroup).exchangerate = n.getNumberValue(); },
            "fromdate": (o, n) => { (o as unknown as Bookableresourcegroup).fromdate = n.getDateValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Bookableresourcegroup).importsequencenumber = n.getNumberValue(); },
            "modifiedbyname": (o, n) => { (o as unknown as Bookableresourcegroup).modifiedbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Bookableresourcegroup).modifiedon = n.getDateValue(); },
            "modifiedonbehalfbyname": (o, n) => { (o as unknown as Bookableresourcegroup).modifiedonbehalfbyname = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_crewmembertype": (o, n) => { (o as unknown as Bookableresourcegroup).msdyn_crewmembertype = n.getNumberValue(); },
            "msdyn_internalflags": (o, n) => { (o as unknown as Bookableresourcegroup).msdyn_internalflags = n.getStringValue(); },
            "name": (o, n) => { (o as unknown as Bookableresourcegroup).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Bookableresourcegroup).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Bookableresourcegroup).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Bookableresourcegroup).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Bookableresourcegroup).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Bookableresourcegroup).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentResource": (o, n) => { (o as unknown as Bookableresourcegroup).parentResource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Bookableresourcegroup).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Bookableresourcegroup).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Bookableresourcegroup).timezoneruleversionnumber = n.getNumberValue(); },
            "todate": (o, n) => { (o as unknown as Bookableresourcegroup).todate = n.getDateValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Bookableresourcegroup).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Bookableresourcegroup).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Bookableresourcegroup).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_crewmembertype property value. 
     * @returns a integer
     */
    public get msdyn_crewmembertype() {
        return this._msdyn_crewmembertype;
    };
    /**
     * Sets the msdyn_crewmembertype property value. 
     * @param value Value to set for the msdyn_crewmembertype property.
     */
    public set msdyn_crewmembertype(value: number | undefined) {
        this._msdyn_crewmembertype = value;
    };
    /**
     * Gets the msdyn_internalflags property value. 
     * @returns a string
     */
    public get msdyn_internalflags() {
        return this._msdyn_internalflags;
    };
    /**
     * Sets the msdyn_internalflags property value. 
     * @param value Value to set for the msdyn_internalflags property.
     */
    public set msdyn_internalflags(value: string | undefined) {
        this._msdyn_internalflags = value;
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
     * Gets the parentResource property value. 
     * @returns a bookableresource
     */
    public get parentResource() {
        return this._parentResource;
    };
    /**
     * Sets the parentResource property value. 
     * @param value Value to set for the ParentResource property.
     */
    public set parentResource(value: Bookableresource | undefined) {
        this._parentResource = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("_childresource_value", this._childresource_value);
        writer.writeStringValue("_createdby_value", this._createdby_value);
        writer.writeStringValue("_createdonbehalfby_value", this._createdonbehalfby_value);
        writer.writeStringValue("_modifiedby_value", this._modifiedby_value);
        writer.writeStringValue("_modifiedonbehalfby_value", this._modifiedonbehalfby_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_parentresource_value", this._parentresource_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Annotation>("bookableresourcegroup_Annotations", this.bookableresourcegroup_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("bookableresourcegroup_AsyncOperations", this.bookableresourcegroup_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("bookableresourcegroup_BulkDeleteFailures", this.bookableresourcegroup_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcegroup_DuplicateBaseRecord", this.bookableresourcegroup_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("bookableresourcegroup_DuplicateMatchingRecord", this.bookableresourcegroup_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("bookableresourcegroup_MailboxTrackingFolders", this.bookableresourcegroup_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("bookableresourcegroup_PrincipalObjectAttributeAccesses", this.bookableresourcegroup_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("bookableresourcegroup_ProcessSession", this.bookableresourcegroup_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("bookableResourceGroup_SyncErrors", this.bookableResourceGroup_SyncErrors);
        writer.writeStringValue("bookableresourcegroupid", this.bookableresourcegroupid);
        writer.writeObjectValue<Bookableresource>("childResource", this.childResource);
        writer.writeObjectValue<Systemuser>("createdbyname", this.createdbyname);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfbyname", this.createdonbehalfbyname);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeDateValue("fromdate", this.fromdate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedbyname", this.modifiedbyname);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfbyname", this.modifiedonbehalfbyname);
        writer.writeNumberValue("msdyn_crewmembertype", this.msdyn_crewmembertype);
        writer.writeStringValue("msdyn_internalflags", this.msdyn_internalflags);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Bookableresource>("parentResource", this.parentResource);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeDateValue("todate", this.todate);
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
     * Gets the todate property value. 
     * @returns a Date
     */
    public get todate() {
        return this._todate;
    };
    /**
     * Sets the todate property value. 
     * @param value Value to set for the todate property.
     */
    public set todate(value: Date | undefined) {
        this._todate = value;
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
