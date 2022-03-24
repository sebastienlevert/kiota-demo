import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBulkoperationFromDiscriminatorValue} from './createBulkoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createCampaignactivityFromDiscriminatorValue} from './createCampaignactivityFromDiscriminatorValue';
import {createCampaignFromDiscriminatorValue} from './createCampaignFromDiscriminatorValue';
import {createConnectionFromDiscriminatorValue} from './createConnectionFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createListoperationFromDiscriminatorValue} from './createListoperationFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProcessstageFromDiscriminatorValue} from './createProcessstageFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Annotation, Asyncoperation, Bulkdeletefailure, Bulkoperation, Businessunit, Campaign, Campaignactivity, Connection, Contact, Crmbaseentity, Duplicaterecord, Lead, Listoperation, Mailboxtrackingfolder, Principal, Principalobjectattributeaccess, Processsession, Processstage, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class List extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _campaignactivitylist_association?: Campaignactivity[] | undefined;
    private _campaignlist_association?: Campaign[] | undefined;
    private _cost?: number | undefined;
    private _cost_base?: number | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdfromcode?: number | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _donotsendonoptout?: boolean | undefined;
    private _exchangerate?: number | undefined;
    private _ignoreinactivelistmembers?: boolean | undefined;
    private _importsequencenumber?: number | undefined;
    private _lastusedon?: Date | undefined;
    private _list_Annotation?: Annotation[] | undefined;
    private _list_AsyncOperations?: Asyncoperation[] | undefined;
    private _list_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _list_BulkOperations?: Bulkoperation[] | undefined;
    private _list_connections1?: Connection[] | undefined;
    private _list_connections2?: Connection[] | undefined;
    private _list_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _list_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _list_listoperation_ListId?: Listoperation[] | undefined;
    private _list_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _list_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _list_ProcessSessions?: Processsession[] | undefined;
    private _list_SyncErrors?: Syncerror[] | undefined;
    private _listaccount_association?: Account[] | undefined;
    private _listcontact_association?: Contact[] | undefined;
    private _listid?: string | undefined;
    private _listlead_association?: Lead[] | undefined;
    private _listname?: string | undefined;
    private _lockstatus?: boolean | undefined;
    private _membercount?: number | undefined;
    private _membertype?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _processedmembercount?: number | undefined;
    private _processfetchxml?: string | undefined;
    private _processid?: string | undefined;
    private _purpose?: string | undefined;
    private _query?: string | undefined;
    private _source?: string | undefined;
    private _stageid?: string | undefined;
    private _stageid_processstage?: Processstage | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _traversedpath?: string | undefined;
    private _type?: boolean | undefined;
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
     * Gets the campaignactivitylist_association property value. 
     * @returns a campaignactivity
     */
    public get campaignactivitylist_association() {
        return this._campaignactivitylist_association;
    };
    /**
     * Sets the campaignactivitylist_association property value. 
     * @param value Value to set for the campaignactivitylist_association property.
     */
    public set campaignactivitylist_association(value: Campaignactivity[] | undefined) {
        this._campaignactivitylist_association = value;
    };
    /**
     * Gets the campaignlist_association property value. 
     * @returns a campaign
     */
    public get campaignlist_association() {
        return this._campaignlist_association;
    };
    /**
     * Sets the campaignlist_association property value. 
     * @param value Value to set for the campaignlist_association property.
     */
    public set campaignlist_association(value: Campaign[] | undefined) {
        this._campaignlist_association = value;
    };
    /**
     * Instantiates a new list and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the cost property value. 
     * @returns a int64
     */
    public get cost() {
        return this._cost;
    };
    /**
     * Sets the cost property value. 
     * @param value Value to set for the cost property.
     */
    public set cost(value: number | undefined) {
        this._cost = value;
    };
    /**
     * Gets the cost_base property value. 
     * @returns a int64
     */
    public get cost_base() {
        return this._cost_base;
    };
    /**
     * Sets the cost_base property value. 
     * @param value Value to set for the cost_base property.
     */
    public set cost_base(value: number | undefined) {
        this._cost_base = value;
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
     * Gets the createdfromcode property value. 
     * @returns a integer
     */
    public get createdfromcode() {
        return this._createdfromcode;
    };
    /**
     * Sets the createdfromcode property value. 
     * @param value Value to set for the createdfromcode property.
     */
    public set createdfromcode(value: number | undefined) {
        this._createdfromcode = value;
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
     * Gets the description property value. 
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. 
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        this._description = value;
    };
    /**
     * Gets the donotsendonoptout property value. 
     * @returns a boolean
     */
    public get donotsendonoptout() {
        return this._donotsendonoptout;
    };
    /**
     * Sets the donotsendonoptout property value. 
     * @param value Value to set for the donotsendonoptout property.
     */
    public set donotsendonoptout(value: boolean | undefined) {
        this._donotsendonoptout = value;
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
            "_createdby_value": (o, n) => { (o as unknown as List)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as List)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as List)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as List)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as List)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as List)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as List)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as List)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as List)._transactioncurrencyid_value = n.getStringValue(); },
            "campaignactivitylist_association": (o, n) => { (o as unknown as List).campaignactivitylist_association = n.getCollectionOfObjectValues<Campaignactivity>(createCampaignactivityFromDiscriminatorValue); },
            "campaignlist_association": (o, n) => { (o as unknown as List).campaignlist_association = n.getCollectionOfObjectValues<Campaign>(createCampaignFromDiscriminatorValue); },
            "cost": (o, n) => { (o as unknown as List).cost = n.getNumberValue(); },
            "cost_base": (o, n) => { (o as unknown as List).cost_base = n.getNumberValue(); },
            "createdby": (o, n) => { (o as unknown as List).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdfromcode": (o, n) => { (o as unknown as List).createdfromcode = n.getNumberValue(); },
            "createdon": (o, n) => { (o as unknown as List).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as List).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as List).description = n.getStringValue(); },
            "donotsendonoptout": (o, n) => { (o as unknown as List).donotsendonoptout = n.getBooleanValue(); },
            "exchangerate": (o, n) => { (o as unknown as List).exchangerate = n.getNumberValue(); },
            "ignoreinactivelistmembers": (o, n) => { (o as unknown as List).ignoreinactivelistmembers = n.getBooleanValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as List).importsequencenumber = n.getNumberValue(); },
            "lastusedon": (o, n) => { (o as unknown as List).lastusedon = n.getDateValue(); },
            "list_Annotation": (o, n) => { (o as unknown as List).list_Annotation = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "list_AsyncOperations": (o, n) => { (o as unknown as List).list_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "list_BulkDeleteFailures": (o, n) => { (o as unknown as List).list_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "list_BulkOperations": (o, n) => { (o as unknown as List).list_BulkOperations = n.getCollectionOfObjectValues<Bulkoperation>(createBulkoperationFromDiscriminatorValue); },
            "list_connections1": (o, n) => { (o as unknown as List).list_connections1 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "list_connections2": (o, n) => { (o as unknown as List).list_connections2 = n.getCollectionOfObjectValues<Connection>(createConnectionFromDiscriminatorValue); },
            "list_DuplicateBaseRecord": (o, n) => { (o as unknown as List).list_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "list_DuplicateMatchingRecord": (o, n) => { (o as unknown as List).list_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "list_listoperation_ListId": (o, n) => { (o as unknown as List).list_listoperation_ListId = n.getCollectionOfObjectValues<Listoperation>(createListoperationFromDiscriminatorValue); },
            "list_MailboxTrackingFolders": (o, n) => { (o as unknown as List).list_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "list_principalobjectattributeaccess": (o, n) => { (o as unknown as List).list_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "list_ProcessSessions": (o, n) => { (o as unknown as List).list_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "list_SyncErrors": (o, n) => { (o as unknown as List).list_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "listaccount_association": (o, n) => { (o as unknown as List).listaccount_association = n.getCollectionOfObjectValues<Account>(createAccountFromDiscriminatorValue); },
            "listcontact_association": (o, n) => { (o as unknown as List).listcontact_association = n.getCollectionOfObjectValues<Contact>(createContactFromDiscriminatorValue); },
            "listid": (o, n) => { (o as unknown as List).listid = n.getStringValue(); },
            "listlead_association": (o, n) => { (o as unknown as List).listlead_association = n.getCollectionOfObjectValues<Lead>(createLeadFromDiscriminatorValue); },
            "listname": (o, n) => { (o as unknown as List).listname = n.getStringValue(); },
            "lockstatus": (o, n) => { (o as unknown as List).lockstatus = n.getBooleanValue(); },
            "membercount": (o, n) => { (o as unknown as List).membercount = n.getNumberValue(); },
            "membertype": (o, n) => { (o as unknown as List).membertype = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as List).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as List).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as List).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "overriddencreatedon": (o, n) => { (o as unknown as List).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as List).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as List).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as List).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as List).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "processedmembercount": (o, n) => { (o as unknown as List).processedmembercount = n.getNumberValue(); },
            "processfetchxml": (o, n) => { (o as unknown as List).processfetchxml = n.getStringValue(); },
            "processid": (o, n) => { (o as unknown as List).processid = n.getStringValue(); },
            "purpose": (o, n) => { (o as unknown as List).purpose = n.getStringValue(); },
            "query": (o, n) => { (o as unknown as List).query = n.getStringValue(); },
            "source": (o, n) => { (o as unknown as List).source = n.getStringValue(); },
            "stageid": (o, n) => { (o as unknown as List).stageid = n.getStringValue(); },
            "stageid_processstage": (o, n) => { (o as unknown as List).stageid_processstage = n.getObjectValue<Processstage>(createProcessstageFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as List).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as List).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as List).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as List).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "traversedpath": (o, n) => { (o as unknown as List).traversedpath = n.getStringValue(); },
            "type": (o, n) => { (o as unknown as List).type = n.getBooleanValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as List).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as List).versionnumber = n.getNumberValue(); },
        };
    };
    /**
     * Gets the ignoreinactivelistmembers property value. 
     * @returns a boolean
     */
    public get ignoreinactivelistmembers() {
        return this._ignoreinactivelistmembers;
    };
    /**
     * Sets the ignoreinactivelistmembers property value. 
     * @param value Value to set for the ignoreinactivelistmembers property.
     */
    public set ignoreinactivelistmembers(value: boolean | undefined) {
        this._ignoreinactivelistmembers = value;
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
     * Gets the lastusedon property value. 
     * @returns a Date
     */
    public get lastusedon() {
        return this._lastusedon;
    };
    /**
     * Sets the lastusedon property value. 
     * @param value Value to set for the lastusedon property.
     */
    public set lastusedon(value: Date | undefined) {
        this._lastusedon = value;
    };
    /**
     * Gets the list_Annotation property value. 
     * @returns a annotation
     */
    public get list_Annotation() {
        return this._list_Annotation;
    };
    /**
     * Sets the list_Annotation property value. 
     * @param value Value to set for the List_Annotation property.
     */
    public set list_Annotation(value: Annotation[] | undefined) {
        this._list_Annotation = value;
    };
    /**
     * Gets the list_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get list_AsyncOperations() {
        return this._list_AsyncOperations;
    };
    /**
     * Sets the list_AsyncOperations property value. 
     * @param value Value to set for the List_AsyncOperations property.
     */
    public set list_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._list_AsyncOperations = value;
    };
    /**
     * Gets the list_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get list_BulkDeleteFailures() {
        return this._list_BulkDeleteFailures;
    };
    /**
     * Sets the list_BulkDeleteFailures property value. 
     * @param value Value to set for the List_BulkDeleteFailures property.
     */
    public set list_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._list_BulkDeleteFailures = value;
    };
    /**
     * Gets the list_BulkOperations property value. 
     * @returns a bulkoperation
     */
    public get list_BulkOperations() {
        return this._list_BulkOperations;
    };
    /**
     * Sets the list_BulkOperations property value. 
     * @param value Value to set for the List_BulkOperations property.
     */
    public set list_BulkOperations(value: Bulkoperation[] | undefined) {
        this._list_BulkOperations = value;
    };
    /**
     * Gets the list_connections1 property value. 
     * @returns a connection
     */
    public get list_connections1() {
        return this._list_connections1;
    };
    /**
     * Sets the list_connections1 property value. 
     * @param value Value to set for the list_connections1 property.
     */
    public set list_connections1(value: Connection[] | undefined) {
        this._list_connections1 = value;
    };
    /**
     * Gets the list_connections2 property value. 
     * @returns a connection
     */
    public get list_connections2() {
        return this._list_connections2;
    };
    /**
     * Sets the list_connections2 property value. 
     * @param value Value to set for the list_connections2 property.
     */
    public set list_connections2(value: Connection[] | undefined) {
        this._list_connections2 = value;
    };
    /**
     * Gets the list_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get list_DuplicateBaseRecord() {
        return this._list_DuplicateBaseRecord;
    };
    /**
     * Sets the list_DuplicateBaseRecord property value. 
     * @param value Value to set for the List_DuplicateBaseRecord property.
     */
    public set list_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._list_DuplicateBaseRecord = value;
    };
    /**
     * Gets the list_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get list_DuplicateMatchingRecord() {
        return this._list_DuplicateMatchingRecord;
    };
    /**
     * Sets the list_DuplicateMatchingRecord property value. 
     * @param value Value to set for the List_DuplicateMatchingRecord property.
     */
    public set list_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._list_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the list_listoperation_ListId property value. 
     * @returns a listoperation
     */
    public get list_listoperation_ListId() {
        return this._list_listoperation_ListId;
    };
    /**
     * Sets the list_listoperation_ListId property value. 
     * @param value Value to set for the list_listoperation_ListId property.
     */
    public set list_listoperation_ListId(value: Listoperation[] | undefined) {
        this._list_listoperation_ListId = value;
    };
    /**
     * Gets the list_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get list_MailboxTrackingFolders() {
        return this._list_MailboxTrackingFolders;
    };
    /**
     * Sets the list_MailboxTrackingFolders property value. 
     * @param value Value to set for the list_MailboxTrackingFolders property.
     */
    public set list_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._list_MailboxTrackingFolders = value;
    };
    /**
     * Gets the list_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get list_principalobjectattributeaccess() {
        return this._list_principalobjectattributeaccess;
    };
    /**
     * Sets the list_principalobjectattributeaccess property value. 
     * @param value Value to set for the list_principalobjectattributeaccess property.
     */
    public set list_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._list_principalobjectattributeaccess = value;
    };
    /**
     * Gets the list_ProcessSessions property value. 
     * @returns a processsession
     */
    public get list_ProcessSessions() {
        return this._list_ProcessSessions;
    };
    /**
     * Sets the list_ProcessSessions property value. 
     * @param value Value to set for the List_ProcessSessions property.
     */
    public set list_ProcessSessions(value: Processsession[] | undefined) {
        this._list_ProcessSessions = value;
    };
    /**
     * Gets the list_SyncErrors property value. 
     * @returns a syncerror
     */
    public get list_SyncErrors() {
        return this._list_SyncErrors;
    };
    /**
     * Sets the list_SyncErrors property value. 
     * @param value Value to set for the List_SyncErrors property.
     */
    public set list_SyncErrors(value: Syncerror[] | undefined) {
        this._list_SyncErrors = value;
    };
    /**
     * Gets the listaccount_association property value. 
     * @returns a account
     */
    public get listaccount_association() {
        return this._listaccount_association;
    };
    /**
     * Sets the listaccount_association property value. 
     * @param value Value to set for the listaccount_association property.
     */
    public set listaccount_association(value: Account[] | undefined) {
        this._listaccount_association = value;
    };
    /**
     * Gets the listcontact_association property value. 
     * @returns a contact
     */
    public get listcontact_association() {
        return this._listcontact_association;
    };
    /**
     * Sets the listcontact_association property value. 
     * @param value Value to set for the listcontact_association property.
     */
    public set listcontact_association(value: Contact[] | undefined) {
        this._listcontact_association = value;
    };
    /**
     * Gets the listid property value. 
     * @returns a string
     */
    public get listid() {
        return this._listid;
    };
    /**
     * Sets the listid property value. 
     * @param value Value to set for the listid property.
     */
    public set listid(value: string | undefined) {
        this._listid = value;
    };
    /**
     * Gets the listlead_association property value. 
     * @returns a lead
     */
    public get listlead_association() {
        return this._listlead_association;
    };
    /**
     * Sets the listlead_association property value. 
     * @param value Value to set for the listlead_association property.
     */
    public set listlead_association(value: Lead[] | undefined) {
        this._listlead_association = value;
    };
    /**
     * Gets the listname property value. 
     * @returns a string
     */
    public get listname() {
        return this._listname;
    };
    /**
     * Sets the listname property value. 
     * @param value Value to set for the listname property.
     */
    public set listname(value: string | undefined) {
        this._listname = value;
    };
    /**
     * Gets the lockstatus property value. 
     * @returns a boolean
     */
    public get lockstatus() {
        return this._lockstatus;
    };
    /**
     * Sets the lockstatus property value. 
     * @param value Value to set for the lockstatus property.
     */
    public set lockstatus(value: boolean | undefined) {
        this._lockstatus = value;
    };
    /**
     * Gets the membercount property value. 
     * @returns a integer
     */
    public get membercount() {
        return this._membercount;
    };
    /**
     * Sets the membercount property value. 
     * @param value Value to set for the membercount property.
     */
    public set membercount(value: number | undefined) {
        this._membercount = value;
    };
    /**
     * Gets the membertype property value. 
     * @returns a integer
     */
    public get membertype() {
        return this._membertype;
    };
    /**
     * Sets the membertype property value. 
     * @param value Value to set for the membertype property.
     */
    public set membertype(value: number | undefined) {
        this._membertype = value;
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
     * Gets the processedmembercount property value. 
     * @returns a integer
     */
    public get processedmembercount() {
        return this._processedmembercount;
    };
    /**
     * Sets the processedmembercount property value. 
     * @param value Value to set for the processedmembercount property.
     */
    public set processedmembercount(value: number | undefined) {
        this._processedmembercount = value;
    };
    /**
     * Gets the processfetchxml property value. 
     * @returns a string
     */
    public get processfetchxml() {
        return this._processfetchxml;
    };
    /**
     * Sets the processfetchxml property value. 
     * @param value Value to set for the processfetchxml property.
     */
    public set processfetchxml(value: string | undefined) {
        this._processfetchxml = value;
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
     * Gets the purpose property value. 
     * @returns a string
     */
    public get purpose() {
        return this._purpose;
    };
    /**
     * Sets the purpose property value. 
     * @param value Value to set for the purpose property.
     */
    public set purpose(value: string | undefined) {
        this._purpose = value;
    };
    /**
     * Gets the query property value. 
     * @returns a string
     */
    public get query() {
        return this._query;
    };
    /**
     * Sets the query property value. 
     * @param value Value to set for the query property.
     */
    public set query(value: string | undefined) {
        this._query = value;
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
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeCollectionOfObjectValues<Campaignactivity>("campaignactivitylist_association", this.campaignactivitylist_association);
        writer.writeCollectionOfObjectValues<Campaign>("campaignlist_association", this.campaignlist_association);
        writer.writeNumberValue("cost", this.cost);
        writer.writeNumberValue("cost_base", this.cost_base);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeNumberValue("createdfromcode", this.createdfromcode);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeBooleanValue("donotsendonoptout", this.donotsendonoptout);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeBooleanValue("ignoreinactivelistmembers", this.ignoreinactivelistmembers);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeDateValue("lastusedon", this.lastusedon);
        writer.writeCollectionOfObjectValues<Annotation>("list_Annotation", this.list_Annotation);
        writer.writeCollectionOfObjectValues<Asyncoperation>("list_AsyncOperations", this.list_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("list_BulkDeleteFailures", this.list_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Bulkoperation>("list_BulkOperations", this.list_BulkOperations);
        writer.writeCollectionOfObjectValues<Connection>("list_connections1", this.list_connections1);
        writer.writeCollectionOfObjectValues<Connection>("list_connections2", this.list_connections2);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("list_DuplicateBaseRecord", this.list_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("list_DuplicateMatchingRecord", this.list_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Listoperation>("list_listoperation_ListId", this.list_listoperation_ListId);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("list_MailboxTrackingFolders", this.list_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("list_principalobjectattributeaccess", this.list_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("list_ProcessSessions", this.list_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("list_SyncErrors", this.list_SyncErrors);
        writer.writeCollectionOfObjectValues<Account>("listaccount_association", this.listaccount_association);
        writer.writeCollectionOfObjectValues<Contact>("listcontact_association", this.listcontact_association);
        writer.writeStringValue("listid", this.listid);
        writer.writeCollectionOfObjectValues<Lead>("listlead_association", this.listlead_association);
        writer.writeStringValue("listname", this.listname);
        writer.writeBooleanValue("lockstatus", this.lockstatus);
        writer.writeNumberValue("membercount", this.membercount);
        writer.writeNumberValue("membertype", this.membertype);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeNumberValue("processedmembercount", this.processedmembercount);
        writer.writeStringValue("processfetchxml", this.processfetchxml);
        writer.writeStringValue("processid", this.processid);
        writer.writeStringValue("purpose", this.purpose);
        writer.writeStringValue("query", this.query);
        writer.writeStringValue("source", this.source);
        writer.writeStringValue("stageid", this.stageid);
        writer.writeObjectValue<Processstage>("stageid_processstage", this.stageid_processstage);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("traversedpath", this.traversedpath);
        writer.writeBooleanValue("type", this.type);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the source property value. 
     * @returns a string
     */
    public get source() {
        return this._source;
    };
    /**
     * Sets the source property value. 
     * @param value Value to set for the source property.
     */
    public set source(value: string | undefined) {
        this._source = value;
    };
    /**
     * Gets the stageid property value. 
     * @returns a string
     */
    public get stageid() {
        return this._stageid;
    };
    /**
     * Sets the stageid property value. 
     * @param value Value to set for the stageid property.
     */
    public set stageid(value: string | undefined) {
        this._stageid = value;
    };
    /**
     * Gets the stageid_processstage property value. 
     * @returns a processstage
     */
    public get stageid_processstage() {
        return this._stageid_processstage;
    };
    /**
     * Sets the stageid_processstage property value. 
     * @param value Value to set for the stageid_processstage property.
     */
    public set stageid_processstage(value: Processstage | undefined) {
        this._stageid_processstage = value;
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
     * Gets the type property value. 
     * @returns a boolean
     */
    public get type() {
        return this._type;
    };
    /**
     * Sets the type property value. 
     * @param value Value to set for the type property.
     */
    public set type(value: boolean | undefined) {
        this._type = value;
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
