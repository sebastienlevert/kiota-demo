import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createKbarticleFromDiscriminatorValue} from './createKbarticleFromDiscriminatorValue';
import {createKnowledgearticleFromDiscriminatorValue} from './createKnowledgearticleFromDiscriminatorValue';
import {createLeadFromDiscriminatorValue} from './createLeadFromDiscriminatorValue';
import {createMsdyn_agreementbookingdateFromDiscriminatorValue} from './createMsdyn_agreementbookingdateFromDiscriminatorValue';
import {createMsdyn_agreementbookingsetupFromDiscriminatorValue} from './createMsdyn_agreementbookingsetupFromDiscriminatorValue';
import {createMsdyn_agreementFromDiscriminatorValue} from './createMsdyn_agreementFromDiscriminatorValue';
import {createMsdyn_agreementinvoicedateFromDiscriminatorValue} from './createMsdyn_agreementinvoicedateFromDiscriminatorValue';
import {createMsdyn_agreementinvoicesetupFromDiscriminatorValue} from './createMsdyn_agreementinvoicesetupFromDiscriminatorValue';
import {createMsdyn_bookingtimestampFromDiscriminatorValue} from './createMsdyn_bookingtimestampFromDiscriminatorValue';
import {createMsdyn_expenseFromDiscriminatorValue} from './createMsdyn_expenseFromDiscriminatorValue';
import {createMsdyn_incidenttypeproductFromDiscriminatorValue} from './createMsdyn_incidenttypeproductFromDiscriminatorValue';
import {createMsdyn_inventoryadjustmentFromDiscriminatorValue} from './createMsdyn_inventoryadjustmentFromDiscriminatorValue';
import {createMsdyn_inventoryadjustmentproductFromDiscriminatorValue} from './createMsdyn_inventoryadjustmentproductFromDiscriminatorValue';
import {createMsdyn_inventorytransferFromDiscriminatorValue} from './createMsdyn_inventorytransferFromDiscriminatorValue';
import {createMsdyn_knowledgearticletemplateFromDiscriminatorValue} from './createMsdyn_knowledgearticletemplateFromDiscriminatorValue';
import {createMsdyn_playbookactivityFromDiscriminatorValue} from './createMsdyn_playbookactivityFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_purchaseorderFromDiscriminatorValue} from './createMsdyn_purchaseorderFromDiscriminatorValue';
import {createMsdyn_purchaseorderproductFromDiscriminatorValue} from './createMsdyn_purchaseorderproductFromDiscriminatorValue';
import {createMsdyn_purchaseorderreceiptFromDiscriminatorValue} from './createMsdyn_purchaseorderreceiptFromDiscriminatorValue';
import {createMsdyn_resourceterritoryFromDiscriminatorValue} from './createMsdyn_resourceterritoryFromDiscriminatorValue';
import {createMsdyn_rmaFromDiscriminatorValue} from './createMsdyn_rmaFromDiscriminatorValue';
import {createMsdyn_rmareceiptFromDiscriminatorValue} from './createMsdyn_rmareceiptFromDiscriminatorValue';
import {createMsdyn_rtvFromDiscriminatorValue} from './createMsdyn_rtvFromDiscriminatorValue';
import {createMsdyn_timegroupdetailFromDiscriminatorValue} from './createMsdyn_timegroupdetailFromDiscriminatorValue';
import {createMsdyn_timegroupFromDiscriminatorValue} from './createMsdyn_timegroupFromDiscriminatorValue';
import {createMsdyn_warehouseFromDiscriminatorValue} from './createMsdyn_warehouseFromDiscriminatorValue';
import {createMsdyn_workorderFromDiscriminatorValue} from './createMsdyn_workorderFromDiscriminatorValue';
import {createMsdyn_workorderincidentFromDiscriminatorValue} from './createMsdyn_workorderincidentFromDiscriminatorValue';
import {createMsdyn_workorderproductFromDiscriminatorValue} from './createMsdyn_workorderproductFromDiscriminatorValue';
import {createMsdyn_workorderserviceFromDiscriminatorValue} from './createMsdyn_workorderserviceFromDiscriminatorValue';
import {createMsdyn_workorderservicetaskFromDiscriminatorValue} from './createMsdyn_workorderservicetaskFromDiscriminatorValue';
import {createOpportunityFromDiscriminatorValue} from './createOpportunityFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createQuoteFromDiscriminatorValue} from './createQuoteFromDiscriminatorValue';
import {createSalesliteratureFromDiscriminatorValue} from './createSalesliteratureFromDiscriminatorValue';
import {createSharepointdocumentlocationFromDiscriminatorValue} from './createSharepointdocumentlocationFromDiscriminatorValue';
import {createSharepointsiteFromDiscriminatorValue} from './createSharepointsiteFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Asyncoperation, Businessunit, Crmbaseentity, Duplicaterecord, Kbarticle, Knowledgearticle, Lead, Msdyn_agreement, Msdyn_agreementbookingdate, Msdyn_agreementbookingsetup, Msdyn_agreementinvoicedate, Msdyn_agreementinvoicesetup, Msdyn_bookingtimestamp, Msdyn_expense, Msdyn_incidenttypeproduct, Msdyn_inventoryadjustment, Msdyn_inventoryadjustmentproduct, Msdyn_inventorytransfer, Msdyn_knowledgearticletemplate, Msdyn_playbookactivity, Msdyn_project, Msdyn_purchaseorder, Msdyn_purchaseorderproduct, Msdyn_purchaseorderreceipt, Msdyn_resourceterritory, Msdyn_rma, Msdyn_rmareceipt, Msdyn_rtv, Msdyn_timegroup, Msdyn_timegroupdetail, Msdyn_warehouse, Msdyn_workorder, Msdyn_workorderincident, Msdyn_workorderproduct, Msdyn_workorderservice, Msdyn_workorderservicetask, Opportunity, Principal, Principalobjectattributeaccess, Processsession, Product, Quote, Salesliterature, Sharepointsite, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Sharepointdocumentlocation extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __parentsiteorlocation_value?: string | undefined;
    private __regardingobjectid_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _absoluteurl?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _description?: string | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _locationtype?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _name?: string | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
    private _parentsiteorlocation_sharepointdocumentlocation?: Sharepointdocumentlocation | undefined;
    private _parentsiteorlocation_sharepointsite?: Sharepointsite | undefined;
    private _regardingobjectid_account?: Account | undefined;
    private _regardingobjectid_kbarticle?: Kbarticle | undefined;
    private _regardingobjectid_knowledgearticle?: Knowledgearticle | undefined;
    private _regardingobjectid_lead?: Lead | undefined;
    private _regardingobjectid_msdyn_agreement?: Msdyn_agreement | undefined;
    private _regardingobjectid_msdyn_agreementbookingdate?: Msdyn_agreementbookingdate | undefined;
    private _regardingobjectid_msdyn_agreementbookingsetup?: Msdyn_agreementbookingsetup | undefined;
    private _regardingobjectid_msdyn_agreementinvoicedate?: Msdyn_agreementinvoicedate | undefined;
    private _regardingobjectid_msdyn_agreementinvoicesetup?: Msdyn_agreementinvoicesetup | undefined;
    private _regardingobjectid_msdyn_bookingtimestamp?: Msdyn_bookingtimestamp | undefined;
    private _regardingobjectid_msdyn_expense?: Msdyn_expense | undefined;
    private _regardingobjectid_msdyn_incidenttypeproduct?: Msdyn_incidenttypeproduct | undefined;
    private _regardingobjectid_msdyn_inventoryadjustment?: Msdyn_inventoryadjustment | undefined;
    private _regardingobjectid_msdyn_inventoryadjustmentproduct?: Msdyn_inventoryadjustmentproduct | undefined;
    private _regardingobjectid_msdyn_inventorytransfer?: Msdyn_inventorytransfer | undefined;
    private _regardingobjectid_msdyn_knowledgearticletemplate?: Msdyn_knowledgearticletemplate | undefined;
    private _regardingobjectid_msdyn_playbookactivity?: Msdyn_playbookactivity | undefined;
    private _regardingobjectid_msdyn_project?: Msdyn_project | undefined;
    private _regardingobjectid_msdyn_purchaseorder?: Msdyn_purchaseorder | undefined;
    private _regardingobjectid_msdyn_purchaseorderproduct?: Msdyn_purchaseorderproduct | undefined;
    private _regardingobjectid_msdyn_purchaseorderreceipt?: Msdyn_purchaseorderreceipt | undefined;
    private _regardingobjectid_msdyn_resourceterritory?: Msdyn_resourceterritory | undefined;
    private _regardingobjectid_msdyn_rma?: Msdyn_rma | undefined;
    private _regardingobjectid_msdyn_rmareceipt?: Msdyn_rmareceipt | undefined;
    private _regardingobjectid_msdyn_rtv?: Msdyn_rtv | undefined;
    private _regardingobjectid_msdyn_timegroup?: Msdyn_timegroup | undefined;
    private _regardingobjectid_msdyn_timegroupdetail?: Msdyn_timegroupdetail | undefined;
    private _regardingobjectid_msdyn_warehouse?: Msdyn_warehouse | undefined;
    private _regardingobjectid_msdyn_workorder?: Msdyn_workorder | undefined;
    private _regardingobjectid_msdyn_workorderincident?: Msdyn_workorderincident | undefined;
    private _regardingobjectid_msdyn_workorderproduct?: Msdyn_workorderproduct | undefined;
    private _regardingobjectid_msdyn_workorderservice?: Msdyn_workorderservice | undefined;
    private _regardingobjectid_msdyn_workorderservicetask?: Msdyn_workorderservicetask | undefined;
    private _regardingobjectid_opportunity?: Opportunity | undefined;
    private _regardingobjectid_product?: Product | undefined;
    private _regardingobjectid_quote?: Quote | undefined;
    private _regardingobjectid_salesliterature?: Salesliterature | undefined;
    private _relativeurl?: string | undefined;
    private _servicetype?: number | undefined;
    private _sharePointDocumentLocation_AsyncOperations?: Asyncoperation[] | undefined;
    private _sharePointDocumentLocation_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _sharePointDocumentLocation_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _sharepointdocumentlocation_parent_sharepointdocumentlocation?: Sharepointdocumentlocation[] | undefined;
    private _sharepointdocumentlocation_principalobjectattributeaccess?: Principalobjectattributeaccess[] | undefined;
    private _sharePointDocumentLocation_ProcessSessions?: Processsession[] | undefined;
    private _sharePointDocumentLocation_SyncErrors?: Syncerror[] | undefined;
    private _sharepointdocumentlocationid?: string | undefined;
    private _sitecollectionid?: string | undefined;
    private _statecode?: number | undefined;
    private _statuscode?: number | undefined;
    private _timezoneruleversionnumber?: number | undefined;
    private _transactioncurrencyid?: Transactioncurrency | undefined;
    private _userid?: string | undefined;
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
     * Gets the _parentsiteorlocation_value property value. 
     * @returns a string
     */
    public get _parentsiteorlocation_value() {
        return this.__parentsiteorlocation_value;
    };
    /**
     * Sets the _parentsiteorlocation_value property value. 
     * @param value Value to set for the _parentsiteorlocation_value property.
     */
    public set _parentsiteorlocation_value(value: string | undefined) {
        this.__parentsiteorlocation_value = value;
    };
    /**
     * Gets the _regardingobjectid_value property value. 
     * @returns a string
     */
    public get _regardingobjectid_value() {
        return this.__regardingobjectid_value;
    };
    /**
     * Sets the _regardingobjectid_value property value. 
     * @param value Value to set for the _regardingobjectid_value property.
     */
    public set _regardingobjectid_value(value: string | undefined) {
        this.__regardingobjectid_value = value;
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
     * Gets the absoluteurl property value. 
     * @returns a string
     */
    public get absoluteurl() {
        return this._absoluteurl;
    };
    /**
     * Sets the absoluteurl property value. 
     * @param value Value to set for the absoluteurl property.
     */
    public set absoluteurl(value: string | undefined) {
        this._absoluteurl = value;
    };
    /**
     * Instantiates a new sharepointdocumentlocation and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._modifiedonbehalfby_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._owninguser_value = n.getStringValue(); },
            "_parentsiteorlocation_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._parentsiteorlocation_value = n.getStringValue(); },
            "_regardingobjectid_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._regardingobjectid_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Sharepointdocumentlocation)._transactioncurrencyid_value = n.getStringValue(); },
            "absoluteurl": (o, n) => { (o as unknown as Sharepointdocumentlocation).absoluteurl = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Sharepointdocumentlocation).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Sharepointdocumentlocation).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Sharepointdocumentlocation).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "description": (o, n) => { (o as unknown as Sharepointdocumentlocation).description = n.getStringValue(); },
            "exchangerate": (o, n) => { (o as unknown as Sharepointdocumentlocation).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Sharepointdocumentlocation).importsequencenumber = n.getNumberValue(); },
            "locationtype": (o, n) => { (o as unknown as Sharepointdocumentlocation).locationtype = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Sharepointdocumentlocation).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Sharepointdocumentlocation).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Sharepointdocumentlocation).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "name": (o, n) => { (o as unknown as Sharepointdocumentlocation).name = n.getStringValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Sharepointdocumentlocation).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Sharepointdocumentlocation).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Sharepointdocumentlocation).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Sharepointdocumentlocation).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Sharepointdocumentlocation).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "parentsiteorlocation_sharepointdocumentlocation": (o, n) => { (o as unknown as Sharepointdocumentlocation).parentsiteorlocation_sharepointdocumentlocation = n.getObjectValue<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "parentsiteorlocation_sharepointsite": (o, n) => { (o as unknown as Sharepointdocumentlocation).parentsiteorlocation_sharepointsite = n.getObjectValue<Sharepointsite>(createSharepointsiteFromDiscriminatorValue); },
            "regardingobjectid_account": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_account = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "regardingobjectid_kbarticle": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_kbarticle = n.getObjectValue<Kbarticle>(createKbarticleFromDiscriminatorValue); },
            "regardingobjectid_knowledgearticle": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_knowledgearticle = n.getObjectValue<Knowledgearticle>(createKnowledgearticleFromDiscriminatorValue); },
            "regardingobjectid_lead": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_lead = n.getObjectValue<Lead>(createLeadFromDiscriminatorValue); },
            "regardingobjectid_msdyn_agreement": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_agreement = n.getObjectValue<Msdyn_agreement>(createMsdyn_agreementFromDiscriminatorValue); },
            "regardingobjectid_msdyn_agreementbookingdate": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_agreementbookingdate = n.getObjectValue<Msdyn_agreementbookingdate>(createMsdyn_agreementbookingdateFromDiscriminatorValue); },
            "regardingobjectid_msdyn_agreementbookingsetup": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_agreementbookingsetup = n.getObjectValue<Msdyn_agreementbookingsetup>(createMsdyn_agreementbookingsetupFromDiscriminatorValue); },
            "regardingobjectid_msdyn_agreementinvoicedate": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_agreementinvoicedate = n.getObjectValue<Msdyn_agreementinvoicedate>(createMsdyn_agreementinvoicedateFromDiscriminatorValue); },
            "regardingobjectid_msdyn_agreementinvoicesetup": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_agreementinvoicesetup = n.getObjectValue<Msdyn_agreementinvoicesetup>(createMsdyn_agreementinvoicesetupFromDiscriminatorValue); },
            "regardingobjectid_msdyn_bookingtimestamp": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_bookingtimestamp = n.getObjectValue<Msdyn_bookingtimestamp>(createMsdyn_bookingtimestampFromDiscriminatorValue); },
            "regardingobjectid_msdyn_expense": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_expense = n.getObjectValue<Msdyn_expense>(createMsdyn_expenseFromDiscriminatorValue); },
            "regardingobjectid_msdyn_incidenttypeproduct": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_incidenttypeproduct = n.getObjectValue<Msdyn_incidenttypeproduct>(createMsdyn_incidenttypeproductFromDiscriminatorValue); },
            "regardingobjectid_msdyn_inventoryadjustment": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_inventoryadjustment = n.getObjectValue<Msdyn_inventoryadjustment>(createMsdyn_inventoryadjustmentFromDiscriminatorValue); },
            "regardingobjectid_msdyn_inventoryadjustmentproduct": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_inventoryadjustmentproduct = n.getObjectValue<Msdyn_inventoryadjustmentproduct>(createMsdyn_inventoryadjustmentproductFromDiscriminatorValue); },
            "regardingobjectid_msdyn_inventorytransfer": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_inventorytransfer = n.getObjectValue<Msdyn_inventorytransfer>(createMsdyn_inventorytransferFromDiscriminatorValue); },
            "regardingobjectid_msdyn_knowledgearticletemplate": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_knowledgearticletemplate = n.getObjectValue<Msdyn_knowledgearticletemplate>(createMsdyn_knowledgearticletemplateFromDiscriminatorValue); },
            "regardingobjectid_msdyn_playbookactivity": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_playbookactivity = n.getObjectValue<Msdyn_playbookactivity>(createMsdyn_playbookactivityFromDiscriminatorValue); },
            "regardingobjectid_msdyn_project": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "regardingobjectid_msdyn_purchaseorder": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_purchaseorder = n.getObjectValue<Msdyn_purchaseorder>(createMsdyn_purchaseorderFromDiscriminatorValue); },
            "regardingobjectid_msdyn_purchaseorderproduct": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_purchaseorderproduct = n.getObjectValue<Msdyn_purchaseorderproduct>(createMsdyn_purchaseorderproductFromDiscriminatorValue); },
            "regardingobjectid_msdyn_purchaseorderreceipt": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_purchaseorderreceipt = n.getObjectValue<Msdyn_purchaseorderreceipt>(createMsdyn_purchaseorderreceiptFromDiscriminatorValue); },
            "regardingobjectid_msdyn_resourceterritory": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_resourceterritory = n.getObjectValue<Msdyn_resourceterritory>(createMsdyn_resourceterritoryFromDiscriminatorValue); },
            "regardingobjectid_msdyn_rma": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_rma = n.getObjectValue<Msdyn_rma>(createMsdyn_rmaFromDiscriminatorValue); },
            "regardingobjectid_msdyn_rmareceipt": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_rmareceipt = n.getObjectValue<Msdyn_rmareceipt>(createMsdyn_rmareceiptFromDiscriminatorValue); },
            "regardingobjectid_msdyn_rtv": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_rtv = n.getObjectValue<Msdyn_rtv>(createMsdyn_rtvFromDiscriminatorValue); },
            "regardingobjectid_msdyn_timegroup": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_timegroup = n.getObjectValue<Msdyn_timegroup>(createMsdyn_timegroupFromDiscriminatorValue); },
            "regardingobjectid_msdyn_timegroupdetail": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_timegroupdetail = n.getObjectValue<Msdyn_timegroupdetail>(createMsdyn_timegroupdetailFromDiscriminatorValue); },
            "regardingobjectid_msdyn_warehouse": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_warehouse = n.getObjectValue<Msdyn_warehouse>(createMsdyn_warehouseFromDiscriminatorValue); },
            "regardingobjectid_msdyn_workorder": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_workorder = n.getObjectValue<Msdyn_workorder>(createMsdyn_workorderFromDiscriminatorValue); },
            "regardingobjectid_msdyn_workorderincident": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_workorderincident = n.getObjectValue<Msdyn_workorderincident>(createMsdyn_workorderincidentFromDiscriminatorValue); },
            "regardingobjectid_msdyn_workorderproduct": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_workorderproduct = n.getObjectValue<Msdyn_workorderproduct>(createMsdyn_workorderproductFromDiscriminatorValue); },
            "regardingobjectid_msdyn_workorderservice": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_workorderservice = n.getObjectValue<Msdyn_workorderservice>(createMsdyn_workorderserviceFromDiscriminatorValue); },
            "regardingobjectid_msdyn_workorderservicetask": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_msdyn_workorderservicetask = n.getObjectValue<Msdyn_workorderservicetask>(createMsdyn_workorderservicetaskFromDiscriminatorValue); },
            "regardingobjectid_opportunity": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_opportunity = n.getObjectValue<Opportunity>(createOpportunityFromDiscriminatorValue); },
            "regardingobjectid_product": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "regardingobjectid_quote": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_quote = n.getObjectValue<Quote>(createQuoteFromDiscriminatorValue); },
            "regardingobjectid_salesliterature": (o, n) => { (o as unknown as Sharepointdocumentlocation).regardingobjectid_salesliterature = n.getObjectValue<Salesliterature>(createSalesliteratureFromDiscriminatorValue); },
            "relativeurl": (o, n) => { (o as unknown as Sharepointdocumentlocation).relativeurl = n.getStringValue(); },
            "servicetype": (o, n) => { (o as unknown as Sharepointdocumentlocation).servicetype = n.getNumberValue(); },
            "sharePointDocumentLocation_AsyncOperations": (o, n) => { (o as unknown as Sharepointdocumentlocation).sharePointDocumentLocation_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "sharePointDocumentLocation_DuplicateBaseRecord": (o, n) => { (o as unknown as Sharepointdocumentlocation).sharePointDocumentLocation_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "sharePointDocumentLocation_DuplicateMatchingRecord": (o, n) => { (o as unknown as Sharepointdocumentlocation).sharePointDocumentLocation_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "sharepointdocumentlocation_parent_sharepointdocumentlocation": (o, n) => { (o as unknown as Sharepointdocumentlocation).sharepointdocumentlocation_parent_sharepointdocumentlocation = n.getCollectionOfObjectValues<Sharepointdocumentlocation>(createSharepointdocumentlocationFromDiscriminatorValue); },
            "sharepointdocumentlocation_principalobjectattributeaccess": (o, n) => { (o as unknown as Sharepointdocumentlocation).sharepointdocumentlocation_principalobjectattributeaccess = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "sharePointDocumentLocation_ProcessSessions": (o, n) => { (o as unknown as Sharepointdocumentlocation).sharePointDocumentLocation_ProcessSessions = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "sharePointDocumentLocation_SyncErrors": (o, n) => { (o as unknown as Sharepointdocumentlocation).sharePointDocumentLocation_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "sharepointdocumentlocationid": (o, n) => { (o as unknown as Sharepointdocumentlocation).sharepointdocumentlocationid = n.getStringValue(); },
            "sitecollectionid": (o, n) => { (o as unknown as Sharepointdocumentlocation).sitecollectionid = n.getStringValue(); },
            "statecode": (o, n) => { (o as unknown as Sharepointdocumentlocation).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Sharepointdocumentlocation).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Sharepointdocumentlocation).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Sharepointdocumentlocation).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "userid": (o, n) => { (o as unknown as Sharepointdocumentlocation).userid = n.getStringValue(); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Sharepointdocumentlocation).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Sharepointdocumentlocation).versionnumber = n.getNumberValue(); },
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
     * Gets the locationtype property value. 
     * @returns a integer
     */
    public get locationtype() {
        return this._locationtype;
    };
    /**
     * Sets the locationtype property value. 
     * @param value Value to set for the locationtype property.
     */
    public set locationtype(value: number | undefined) {
        this._locationtype = value;
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
     * Gets the parentsiteorlocation_sharepointdocumentlocation property value. 
     * @returns a sharepointdocumentlocation
     */
    public get parentsiteorlocation_sharepointdocumentlocation() {
        return this._parentsiteorlocation_sharepointdocumentlocation;
    };
    /**
     * Sets the parentsiteorlocation_sharepointdocumentlocation property value. 
     * @param value Value to set for the parentsiteorlocation_sharepointdocumentlocation property.
     */
    public set parentsiteorlocation_sharepointdocumentlocation(value: Sharepointdocumentlocation | undefined) {
        this._parentsiteorlocation_sharepointdocumentlocation = value;
    };
    /**
     * Gets the parentsiteorlocation_sharepointsite property value. 
     * @returns a sharepointsite
     */
    public get parentsiteorlocation_sharepointsite() {
        return this._parentsiteorlocation_sharepointsite;
    };
    /**
     * Sets the parentsiteorlocation_sharepointsite property value. 
     * @param value Value to set for the parentsiteorlocation_sharepointsite property.
     */
    public set parentsiteorlocation_sharepointsite(value: Sharepointsite | undefined) {
        this._parentsiteorlocation_sharepointsite = value;
    };
    /**
     * Gets the regardingobjectid_account property value. 
     * @returns a account
     */
    public get regardingobjectid_account() {
        return this._regardingobjectid_account;
    };
    /**
     * Sets the regardingobjectid_account property value. 
     * @param value Value to set for the regardingobjectid_account property.
     */
    public set regardingobjectid_account(value: Account | undefined) {
        this._regardingobjectid_account = value;
    };
    /**
     * Gets the regardingobjectid_kbarticle property value. 
     * @returns a kbarticle
     */
    public get regardingobjectid_kbarticle() {
        return this._regardingobjectid_kbarticle;
    };
    /**
     * Sets the regardingobjectid_kbarticle property value. 
     * @param value Value to set for the regardingobjectid_kbarticle property.
     */
    public set regardingobjectid_kbarticle(value: Kbarticle | undefined) {
        this._regardingobjectid_kbarticle = value;
    };
    /**
     * Gets the regardingobjectid_knowledgearticle property value. 
     * @returns a knowledgearticle
     */
    public get regardingobjectid_knowledgearticle() {
        return this._regardingobjectid_knowledgearticle;
    };
    /**
     * Sets the regardingobjectid_knowledgearticle property value. 
     * @param value Value to set for the regardingobjectid_knowledgearticle property.
     */
    public set regardingobjectid_knowledgearticle(value: Knowledgearticle | undefined) {
        this._regardingobjectid_knowledgearticle = value;
    };
    /**
     * Gets the regardingobjectid_lead property value. 
     * @returns a lead
     */
    public get regardingobjectid_lead() {
        return this._regardingobjectid_lead;
    };
    /**
     * Sets the regardingobjectid_lead property value. 
     * @param value Value to set for the regardingobjectid_lead property.
     */
    public set regardingobjectid_lead(value: Lead | undefined) {
        this._regardingobjectid_lead = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_agreement property value. 
     * @returns a msdyn_agreement
     */
    public get regardingobjectid_msdyn_agreement() {
        return this._regardingobjectid_msdyn_agreement;
    };
    /**
     * Sets the regardingobjectid_msdyn_agreement property value. 
     * @param value Value to set for the regardingobjectid_msdyn_agreement property.
     */
    public set regardingobjectid_msdyn_agreement(value: Msdyn_agreement | undefined) {
        this._regardingobjectid_msdyn_agreement = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_agreementbookingdate property value. 
     * @returns a msdyn_agreementbookingdate
     */
    public get regardingobjectid_msdyn_agreementbookingdate() {
        return this._regardingobjectid_msdyn_agreementbookingdate;
    };
    /**
     * Sets the regardingobjectid_msdyn_agreementbookingdate property value. 
     * @param value Value to set for the regardingobjectid_msdyn_agreementbookingdate property.
     */
    public set regardingobjectid_msdyn_agreementbookingdate(value: Msdyn_agreementbookingdate | undefined) {
        this._regardingobjectid_msdyn_agreementbookingdate = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_agreementbookingsetup property value. 
     * @returns a msdyn_agreementbookingsetup
     */
    public get regardingobjectid_msdyn_agreementbookingsetup() {
        return this._regardingobjectid_msdyn_agreementbookingsetup;
    };
    /**
     * Sets the regardingobjectid_msdyn_agreementbookingsetup property value. 
     * @param value Value to set for the regardingobjectid_msdyn_agreementbookingsetup property.
     */
    public set regardingobjectid_msdyn_agreementbookingsetup(value: Msdyn_agreementbookingsetup | undefined) {
        this._regardingobjectid_msdyn_agreementbookingsetup = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_agreementinvoicedate property value. 
     * @returns a msdyn_agreementinvoicedate
     */
    public get regardingobjectid_msdyn_agreementinvoicedate() {
        return this._regardingobjectid_msdyn_agreementinvoicedate;
    };
    /**
     * Sets the regardingobjectid_msdyn_agreementinvoicedate property value. 
     * @param value Value to set for the regardingobjectid_msdyn_agreementinvoicedate property.
     */
    public set regardingobjectid_msdyn_agreementinvoicedate(value: Msdyn_agreementinvoicedate | undefined) {
        this._regardingobjectid_msdyn_agreementinvoicedate = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_agreementinvoicesetup property value. 
     * @returns a msdyn_agreementinvoicesetup
     */
    public get regardingobjectid_msdyn_agreementinvoicesetup() {
        return this._regardingobjectid_msdyn_agreementinvoicesetup;
    };
    /**
     * Sets the regardingobjectid_msdyn_agreementinvoicesetup property value. 
     * @param value Value to set for the regardingobjectid_msdyn_agreementinvoicesetup property.
     */
    public set regardingobjectid_msdyn_agreementinvoicesetup(value: Msdyn_agreementinvoicesetup | undefined) {
        this._regardingobjectid_msdyn_agreementinvoicesetup = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_bookingtimestamp property value. 
     * @returns a msdyn_bookingtimestamp
     */
    public get regardingobjectid_msdyn_bookingtimestamp() {
        return this._regardingobjectid_msdyn_bookingtimestamp;
    };
    /**
     * Sets the regardingobjectid_msdyn_bookingtimestamp property value. 
     * @param value Value to set for the regardingobjectid_msdyn_bookingtimestamp property.
     */
    public set regardingobjectid_msdyn_bookingtimestamp(value: Msdyn_bookingtimestamp | undefined) {
        this._regardingobjectid_msdyn_bookingtimestamp = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_expense property value. 
     * @returns a msdyn_expense
     */
    public get regardingobjectid_msdyn_expense() {
        return this._regardingobjectid_msdyn_expense;
    };
    /**
     * Sets the regardingobjectid_msdyn_expense property value. 
     * @param value Value to set for the regardingobjectid_msdyn_expense property.
     */
    public set regardingobjectid_msdyn_expense(value: Msdyn_expense | undefined) {
        this._regardingobjectid_msdyn_expense = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_incidenttypeproduct property value. 
     * @returns a msdyn_incidenttypeproduct
     */
    public get regardingobjectid_msdyn_incidenttypeproduct() {
        return this._regardingobjectid_msdyn_incidenttypeproduct;
    };
    /**
     * Sets the regardingobjectid_msdyn_incidenttypeproduct property value. 
     * @param value Value to set for the regardingobjectid_msdyn_incidenttypeproduct property.
     */
    public set regardingobjectid_msdyn_incidenttypeproduct(value: Msdyn_incidenttypeproduct | undefined) {
        this._regardingobjectid_msdyn_incidenttypeproduct = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_inventoryadjustment property value. 
     * @returns a msdyn_inventoryadjustment
     */
    public get regardingobjectid_msdyn_inventoryadjustment() {
        return this._regardingobjectid_msdyn_inventoryadjustment;
    };
    /**
     * Sets the regardingobjectid_msdyn_inventoryadjustment property value. 
     * @param value Value to set for the regardingobjectid_msdyn_inventoryadjustment property.
     */
    public set regardingobjectid_msdyn_inventoryadjustment(value: Msdyn_inventoryadjustment | undefined) {
        this._regardingobjectid_msdyn_inventoryadjustment = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_inventoryadjustmentproduct property value. 
     * @returns a msdyn_inventoryadjustmentproduct
     */
    public get regardingobjectid_msdyn_inventoryadjustmentproduct() {
        return this._regardingobjectid_msdyn_inventoryadjustmentproduct;
    };
    /**
     * Sets the regardingobjectid_msdyn_inventoryadjustmentproduct property value. 
     * @param value Value to set for the regardingobjectid_msdyn_inventoryadjustmentproduct property.
     */
    public set regardingobjectid_msdyn_inventoryadjustmentproduct(value: Msdyn_inventoryadjustmentproduct | undefined) {
        this._regardingobjectid_msdyn_inventoryadjustmentproduct = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_inventorytransfer property value. 
     * @returns a msdyn_inventorytransfer
     */
    public get regardingobjectid_msdyn_inventorytransfer() {
        return this._regardingobjectid_msdyn_inventorytransfer;
    };
    /**
     * Sets the regardingobjectid_msdyn_inventorytransfer property value. 
     * @param value Value to set for the regardingobjectid_msdyn_inventorytransfer property.
     */
    public set regardingobjectid_msdyn_inventorytransfer(value: Msdyn_inventorytransfer | undefined) {
        this._regardingobjectid_msdyn_inventorytransfer = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_knowledgearticletemplate property value. 
     * @returns a msdyn_knowledgearticletemplate
     */
    public get regardingobjectid_msdyn_knowledgearticletemplate() {
        return this._regardingobjectid_msdyn_knowledgearticletemplate;
    };
    /**
     * Sets the regardingobjectid_msdyn_knowledgearticletemplate property value. 
     * @param value Value to set for the regardingobjectid_msdyn_knowledgearticletemplate property.
     */
    public set regardingobjectid_msdyn_knowledgearticletemplate(value: Msdyn_knowledgearticletemplate | undefined) {
        this._regardingobjectid_msdyn_knowledgearticletemplate = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_playbookactivity property value. 
     * @returns a msdyn_playbookactivity
     */
    public get regardingobjectid_msdyn_playbookactivity() {
        return this._regardingobjectid_msdyn_playbookactivity;
    };
    /**
     * Sets the regardingobjectid_msdyn_playbookactivity property value. 
     * @param value Value to set for the regardingobjectid_msdyn_playbookactivity property.
     */
    public set regardingobjectid_msdyn_playbookactivity(value: Msdyn_playbookactivity | undefined) {
        this._regardingobjectid_msdyn_playbookactivity = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_project property value. 
     * @returns a msdyn_project
     */
    public get regardingobjectid_msdyn_project() {
        return this._regardingobjectid_msdyn_project;
    };
    /**
     * Sets the regardingobjectid_msdyn_project property value. 
     * @param value Value to set for the regardingobjectid_msdyn_project property.
     */
    public set regardingobjectid_msdyn_project(value: Msdyn_project | undefined) {
        this._regardingobjectid_msdyn_project = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_purchaseorder property value. 
     * @returns a msdyn_purchaseorder
     */
    public get regardingobjectid_msdyn_purchaseorder() {
        return this._regardingobjectid_msdyn_purchaseorder;
    };
    /**
     * Sets the regardingobjectid_msdyn_purchaseorder property value. 
     * @param value Value to set for the regardingobjectid_msdyn_purchaseorder property.
     */
    public set regardingobjectid_msdyn_purchaseorder(value: Msdyn_purchaseorder | undefined) {
        this._regardingobjectid_msdyn_purchaseorder = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_purchaseorderproduct property value. 
     * @returns a msdyn_purchaseorderproduct
     */
    public get regardingobjectid_msdyn_purchaseorderproduct() {
        return this._regardingobjectid_msdyn_purchaseorderproduct;
    };
    /**
     * Sets the regardingobjectid_msdyn_purchaseorderproduct property value. 
     * @param value Value to set for the regardingobjectid_msdyn_purchaseorderproduct property.
     */
    public set regardingobjectid_msdyn_purchaseorderproduct(value: Msdyn_purchaseorderproduct | undefined) {
        this._regardingobjectid_msdyn_purchaseorderproduct = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_purchaseorderreceipt property value. 
     * @returns a msdyn_purchaseorderreceipt
     */
    public get regardingobjectid_msdyn_purchaseorderreceipt() {
        return this._regardingobjectid_msdyn_purchaseorderreceipt;
    };
    /**
     * Sets the regardingobjectid_msdyn_purchaseorderreceipt property value. 
     * @param value Value to set for the regardingobjectid_msdyn_purchaseorderreceipt property.
     */
    public set regardingobjectid_msdyn_purchaseorderreceipt(value: Msdyn_purchaseorderreceipt | undefined) {
        this._regardingobjectid_msdyn_purchaseorderreceipt = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_resourceterritory property value. 
     * @returns a msdyn_resourceterritory
     */
    public get regardingobjectid_msdyn_resourceterritory() {
        return this._regardingobjectid_msdyn_resourceterritory;
    };
    /**
     * Sets the regardingobjectid_msdyn_resourceterritory property value. 
     * @param value Value to set for the regardingobjectid_msdyn_resourceterritory property.
     */
    public set regardingobjectid_msdyn_resourceterritory(value: Msdyn_resourceterritory | undefined) {
        this._regardingobjectid_msdyn_resourceterritory = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_rma property value. 
     * @returns a msdyn_rma
     */
    public get regardingobjectid_msdyn_rma() {
        return this._regardingobjectid_msdyn_rma;
    };
    /**
     * Sets the regardingobjectid_msdyn_rma property value. 
     * @param value Value to set for the regardingobjectid_msdyn_rma property.
     */
    public set regardingobjectid_msdyn_rma(value: Msdyn_rma | undefined) {
        this._regardingobjectid_msdyn_rma = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_rmareceipt property value. 
     * @returns a msdyn_rmareceipt
     */
    public get regardingobjectid_msdyn_rmareceipt() {
        return this._regardingobjectid_msdyn_rmareceipt;
    };
    /**
     * Sets the regardingobjectid_msdyn_rmareceipt property value. 
     * @param value Value to set for the regardingobjectid_msdyn_rmareceipt property.
     */
    public set regardingobjectid_msdyn_rmareceipt(value: Msdyn_rmareceipt | undefined) {
        this._regardingobjectid_msdyn_rmareceipt = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_rtv property value. 
     * @returns a msdyn_rtv
     */
    public get regardingobjectid_msdyn_rtv() {
        return this._regardingobjectid_msdyn_rtv;
    };
    /**
     * Sets the regardingobjectid_msdyn_rtv property value. 
     * @param value Value to set for the regardingobjectid_msdyn_rtv property.
     */
    public set regardingobjectid_msdyn_rtv(value: Msdyn_rtv | undefined) {
        this._regardingobjectid_msdyn_rtv = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_timegroup property value. 
     * @returns a msdyn_timegroup
     */
    public get regardingobjectid_msdyn_timegroup() {
        return this._regardingobjectid_msdyn_timegroup;
    };
    /**
     * Sets the regardingobjectid_msdyn_timegroup property value. 
     * @param value Value to set for the regardingobjectid_msdyn_timegroup property.
     */
    public set regardingobjectid_msdyn_timegroup(value: Msdyn_timegroup | undefined) {
        this._regardingobjectid_msdyn_timegroup = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_timegroupdetail property value. 
     * @returns a msdyn_timegroupdetail
     */
    public get regardingobjectid_msdyn_timegroupdetail() {
        return this._regardingobjectid_msdyn_timegroupdetail;
    };
    /**
     * Sets the regardingobjectid_msdyn_timegroupdetail property value. 
     * @param value Value to set for the regardingobjectid_msdyn_timegroupdetail property.
     */
    public set regardingobjectid_msdyn_timegroupdetail(value: Msdyn_timegroupdetail | undefined) {
        this._regardingobjectid_msdyn_timegroupdetail = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_warehouse property value. 
     * @returns a msdyn_warehouse
     */
    public get regardingobjectid_msdyn_warehouse() {
        return this._regardingobjectid_msdyn_warehouse;
    };
    /**
     * Sets the regardingobjectid_msdyn_warehouse property value. 
     * @param value Value to set for the regardingobjectid_msdyn_warehouse property.
     */
    public set regardingobjectid_msdyn_warehouse(value: Msdyn_warehouse | undefined) {
        this._regardingobjectid_msdyn_warehouse = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_workorder property value. 
     * @returns a msdyn_workorder
     */
    public get regardingobjectid_msdyn_workorder() {
        return this._regardingobjectid_msdyn_workorder;
    };
    /**
     * Sets the regardingobjectid_msdyn_workorder property value. 
     * @param value Value to set for the regardingobjectid_msdyn_workorder property.
     */
    public set regardingobjectid_msdyn_workorder(value: Msdyn_workorder | undefined) {
        this._regardingobjectid_msdyn_workorder = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_workorderincident property value. 
     * @returns a msdyn_workorderincident
     */
    public get regardingobjectid_msdyn_workorderincident() {
        return this._regardingobjectid_msdyn_workorderincident;
    };
    /**
     * Sets the regardingobjectid_msdyn_workorderincident property value. 
     * @param value Value to set for the regardingobjectid_msdyn_workorderincident property.
     */
    public set regardingobjectid_msdyn_workorderincident(value: Msdyn_workorderincident | undefined) {
        this._regardingobjectid_msdyn_workorderincident = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_workorderproduct property value. 
     * @returns a msdyn_workorderproduct
     */
    public get regardingobjectid_msdyn_workorderproduct() {
        return this._regardingobjectid_msdyn_workorderproduct;
    };
    /**
     * Sets the regardingobjectid_msdyn_workorderproduct property value. 
     * @param value Value to set for the regardingobjectid_msdyn_workorderproduct property.
     */
    public set regardingobjectid_msdyn_workorderproduct(value: Msdyn_workorderproduct | undefined) {
        this._regardingobjectid_msdyn_workorderproduct = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_workorderservice property value. 
     * @returns a msdyn_workorderservice
     */
    public get regardingobjectid_msdyn_workorderservice() {
        return this._regardingobjectid_msdyn_workorderservice;
    };
    /**
     * Sets the regardingobjectid_msdyn_workorderservice property value. 
     * @param value Value to set for the regardingobjectid_msdyn_workorderservice property.
     */
    public set regardingobjectid_msdyn_workorderservice(value: Msdyn_workorderservice | undefined) {
        this._regardingobjectid_msdyn_workorderservice = value;
    };
    /**
     * Gets the regardingobjectid_msdyn_workorderservicetask property value. 
     * @returns a msdyn_workorderservicetask
     */
    public get regardingobjectid_msdyn_workorderservicetask() {
        return this._regardingobjectid_msdyn_workorderservicetask;
    };
    /**
     * Sets the regardingobjectid_msdyn_workorderservicetask property value. 
     * @param value Value to set for the regardingobjectid_msdyn_workorderservicetask property.
     */
    public set regardingobjectid_msdyn_workorderservicetask(value: Msdyn_workorderservicetask | undefined) {
        this._regardingobjectid_msdyn_workorderservicetask = value;
    };
    /**
     * Gets the regardingobjectid_opportunity property value. 
     * @returns a opportunity
     */
    public get regardingobjectid_opportunity() {
        return this._regardingobjectid_opportunity;
    };
    /**
     * Sets the regardingobjectid_opportunity property value. 
     * @param value Value to set for the regardingobjectid_opportunity property.
     */
    public set regardingobjectid_opportunity(value: Opportunity | undefined) {
        this._regardingobjectid_opportunity = value;
    };
    /**
     * Gets the regardingobjectid_product property value. 
     * @returns a product
     */
    public get regardingobjectid_product() {
        return this._regardingobjectid_product;
    };
    /**
     * Sets the regardingobjectid_product property value. 
     * @param value Value to set for the regardingobjectid_product property.
     */
    public set regardingobjectid_product(value: Product | undefined) {
        this._regardingobjectid_product = value;
    };
    /**
     * Gets the regardingobjectid_quote property value. 
     * @returns a quote
     */
    public get regardingobjectid_quote() {
        return this._regardingobjectid_quote;
    };
    /**
     * Sets the regardingobjectid_quote property value. 
     * @param value Value to set for the regardingobjectid_quote property.
     */
    public set regardingobjectid_quote(value: Quote | undefined) {
        this._regardingobjectid_quote = value;
    };
    /**
     * Gets the regardingobjectid_salesliterature property value. 
     * @returns a salesliterature
     */
    public get regardingobjectid_salesliterature() {
        return this._regardingobjectid_salesliterature;
    };
    /**
     * Sets the regardingobjectid_salesliterature property value. 
     * @param value Value to set for the regardingobjectid_salesliterature property.
     */
    public set regardingobjectid_salesliterature(value: Salesliterature | undefined) {
        this._regardingobjectid_salesliterature = value;
    };
    /**
     * Gets the relativeurl property value. 
     * @returns a string
     */
    public get relativeurl() {
        return this._relativeurl;
    };
    /**
     * Sets the relativeurl property value. 
     * @param value Value to set for the relativeurl property.
     */
    public set relativeurl(value: string | undefined) {
        this._relativeurl = value;
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
        writer.writeStringValue("_parentsiteorlocation_value", this._parentsiteorlocation_value);
        writer.writeStringValue("_regardingobjectid_value", this._regardingobjectid_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeStringValue("absoluteurl", this.absoluteurl);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeStringValue("description", this.description);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeNumberValue("locationtype", this.locationtype);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeStringValue("name", this.name);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
        writer.writeObjectValue<Sharepointdocumentlocation>("parentsiteorlocation_sharepointdocumentlocation", this.parentsiteorlocation_sharepointdocumentlocation);
        writer.writeObjectValue<Sharepointsite>("parentsiteorlocation_sharepointsite", this.parentsiteorlocation_sharepointsite);
        writer.writeObjectValue<Account>("regardingobjectid_account", this.regardingobjectid_account);
        writer.writeObjectValue<Kbarticle>("regardingobjectid_kbarticle", this.regardingobjectid_kbarticle);
        writer.writeObjectValue<Knowledgearticle>("regardingobjectid_knowledgearticle", this.regardingobjectid_knowledgearticle);
        writer.writeObjectValue<Lead>("regardingobjectid_lead", this.regardingobjectid_lead);
        writer.writeObjectValue<Msdyn_agreement>("regardingobjectid_msdyn_agreement", this.regardingobjectid_msdyn_agreement);
        writer.writeObjectValue<Msdyn_agreementbookingdate>("regardingobjectid_msdyn_agreementbookingdate", this.regardingobjectid_msdyn_agreementbookingdate);
        writer.writeObjectValue<Msdyn_agreementbookingsetup>("regardingobjectid_msdyn_agreementbookingsetup", this.regardingobjectid_msdyn_agreementbookingsetup);
        writer.writeObjectValue<Msdyn_agreementinvoicedate>("regardingobjectid_msdyn_agreementinvoicedate", this.regardingobjectid_msdyn_agreementinvoicedate);
        writer.writeObjectValue<Msdyn_agreementinvoicesetup>("regardingobjectid_msdyn_agreementinvoicesetup", this.regardingobjectid_msdyn_agreementinvoicesetup);
        writer.writeObjectValue<Msdyn_bookingtimestamp>("regardingobjectid_msdyn_bookingtimestamp", this.regardingobjectid_msdyn_bookingtimestamp);
        writer.writeObjectValue<Msdyn_expense>("regardingobjectid_msdyn_expense", this.regardingobjectid_msdyn_expense);
        writer.writeObjectValue<Msdyn_incidenttypeproduct>("regardingobjectid_msdyn_incidenttypeproduct", this.regardingobjectid_msdyn_incidenttypeproduct);
        writer.writeObjectValue<Msdyn_inventoryadjustment>("regardingobjectid_msdyn_inventoryadjustment", this.regardingobjectid_msdyn_inventoryadjustment);
        writer.writeObjectValue<Msdyn_inventoryadjustmentproduct>("regardingobjectid_msdyn_inventoryadjustmentproduct", this.regardingobjectid_msdyn_inventoryadjustmentproduct);
        writer.writeObjectValue<Msdyn_inventorytransfer>("regardingobjectid_msdyn_inventorytransfer", this.regardingobjectid_msdyn_inventorytransfer);
        writer.writeObjectValue<Msdyn_knowledgearticletemplate>("regardingobjectid_msdyn_knowledgearticletemplate", this.regardingobjectid_msdyn_knowledgearticletemplate);
        writer.writeObjectValue<Msdyn_playbookactivity>("regardingobjectid_msdyn_playbookactivity", this.regardingobjectid_msdyn_playbookactivity);
        writer.writeObjectValue<Msdyn_project>("regardingobjectid_msdyn_project", this.regardingobjectid_msdyn_project);
        writer.writeObjectValue<Msdyn_purchaseorder>("regardingobjectid_msdyn_purchaseorder", this.regardingobjectid_msdyn_purchaseorder);
        writer.writeObjectValue<Msdyn_purchaseorderproduct>("regardingobjectid_msdyn_purchaseorderproduct", this.regardingobjectid_msdyn_purchaseorderproduct);
        writer.writeObjectValue<Msdyn_purchaseorderreceipt>("regardingobjectid_msdyn_purchaseorderreceipt", this.regardingobjectid_msdyn_purchaseorderreceipt);
        writer.writeObjectValue<Msdyn_resourceterritory>("regardingobjectid_msdyn_resourceterritory", this.regardingobjectid_msdyn_resourceterritory);
        writer.writeObjectValue<Msdyn_rma>("regardingobjectid_msdyn_rma", this.regardingobjectid_msdyn_rma);
        writer.writeObjectValue<Msdyn_rmareceipt>("regardingobjectid_msdyn_rmareceipt", this.regardingobjectid_msdyn_rmareceipt);
        writer.writeObjectValue<Msdyn_rtv>("regardingobjectid_msdyn_rtv", this.regardingobjectid_msdyn_rtv);
        writer.writeObjectValue<Msdyn_timegroup>("regardingobjectid_msdyn_timegroup", this.regardingobjectid_msdyn_timegroup);
        writer.writeObjectValue<Msdyn_timegroupdetail>("regardingobjectid_msdyn_timegroupdetail", this.regardingobjectid_msdyn_timegroupdetail);
        writer.writeObjectValue<Msdyn_warehouse>("regardingobjectid_msdyn_warehouse", this.regardingobjectid_msdyn_warehouse);
        writer.writeObjectValue<Msdyn_workorder>("regardingobjectid_msdyn_workorder", this.regardingobjectid_msdyn_workorder);
        writer.writeObjectValue<Msdyn_workorderincident>("regardingobjectid_msdyn_workorderincident", this.regardingobjectid_msdyn_workorderincident);
        writer.writeObjectValue<Msdyn_workorderproduct>("regardingobjectid_msdyn_workorderproduct", this.regardingobjectid_msdyn_workorderproduct);
        writer.writeObjectValue<Msdyn_workorderservice>("regardingobjectid_msdyn_workorderservice", this.regardingobjectid_msdyn_workorderservice);
        writer.writeObjectValue<Msdyn_workorderservicetask>("regardingobjectid_msdyn_workorderservicetask", this.regardingobjectid_msdyn_workorderservicetask);
        writer.writeObjectValue<Opportunity>("regardingobjectid_opportunity", this.regardingobjectid_opportunity);
        writer.writeObjectValue<Product>("regardingobjectid_product", this.regardingobjectid_product);
        writer.writeObjectValue<Quote>("regardingobjectid_quote", this.regardingobjectid_quote);
        writer.writeObjectValue<Salesliterature>("regardingobjectid_salesliterature", this.regardingobjectid_salesliterature);
        writer.writeStringValue("relativeurl", this.relativeurl);
        writer.writeNumberValue("servicetype", this.servicetype);
        writer.writeCollectionOfObjectValues<Asyncoperation>("sharePointDocumentLocation_AsyncOperations", this.sharePointDocumentLocation_AsyncOperations);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("sharePointDocumentLocation_DuplicateBaseRecord", this.sharePointDocumentLocation_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("sharePointDocumentLocation_DuplicateMatchingRecord", this.sharePointDocumentLocation_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Sharepointdocumentlocation>("sharepointdocumentlocation_parent_sharepointdocumentlocation", this.sharepointdocumentlocation_parent_sharepointdocumentlocation);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("sharepointdocumentlocation_principalobjectattributeaccess", this.sharepointdocumentlocation_principalobjectattributeaccess);
        writer.writeCollectionOfObjectValues<Processsession>("sharePointDocumentLocation_ProcessSessions", this.sharePointDocumentLocation_ProcessSessions);
        writer.writeCollectionOfObjectValues<Syncerror>("sharePointDocumentLocation_SyncErrors", this.sharePointDocumentLocation_SyncErrors);
        writer.writeStringValue("sharepointdocumentlocationid", this.sharepointdocumentlocationid);
        writer.writeStringValue("sitecollectionid", this.sitecollectionid);
        writer.writeNumberValue("statecode", this.statecode);
        writer.writeNumberValue("statuscode", this.statuscode);
        writer.writeNumberValue("timezoneruleversionnumber", this.timezoneruleversionnumber);
        writer.writeObjectValue<Transactioncurrency>("transactioncurrencyid", this.transactioncurrencyid);
        writer.writeStringValue("userid", this.userid);
        writer.writeNumberValue("utcconversiontimezonecode", this.utcconversiontimezonecode);
        writer.writeNumberValue("versionnumber", this.versionnumber);
    };
    /**
     * Gets the servicetype property value. 
     * @returns a integer
     */
    public get servicetype() {
        return this._servicetype;
    };
    /**
     * Sets the servicetype property value. 
     * @param value Value to set for the servicetype property.
     */
    public set servicetype(value: number | undefined) {
        this._servicetype = value;
    };
    /**
     * Gets the sharePointDocumentLocation_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get sharePointDocumentLocation_AsyncOperations() {
        return this._sharePointDocumentLocation_AsyncOperations;
    };
    /**
     * Sets the sharePointDocumentLocation_AsyncOperations property value. 
     * @param value Value to set for the SharePointDocumentLocation_AsyncOperations property.
     */
    public set sharePointDocumentLocation_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._sharePointDocumentLocation_AsyncOperations = value;
    };
    /**
     * Gets the sharePointDocumentLocation_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get sharePointDocumentLocation_DuplicateBaseRecord() {
        return this._sharePointDocumentLocation_DuplicateBaseRecord;
    };
    /**
     * Sets the sharePointDocumentLocation_DuplicateBaseRecord property value. 
     * @param value Value to set for the SharePointDocumentLocation_DuplicateBaseRecord property.
     */
    public set sharePointDocumentLocation_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._sharePointDocumentLocation_DuplicateBaseRecord = value;
    };
    /**
     * Gets the sharePointDocumentLocation_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get sharePointDocumentLocation_DuplicateMatchingRecord() {
        return this._sharePointDocumentLocation_DuplicateMatchingRecord;
    };
    /**
     * Sets the sharePointDocumentLocation_DuplicateMatchingRecord property value. 
     * @param value Value to set for the SharePointDocumentLocation_DuplicateMatchingRecord property.
     */
    public set sharePointDocumentLocation_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._sharePointDocumentLocation_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the sharepointdocumentlocation_parent_sharepointdocumentlocation property value. 
     * @returns a sharepointdocumentlocation
     */
    public get sharepointdocumentlocation_parent_sharepointdocumentlocation() {
        return this._sharepointdocumentlocation_parent_sharepointdocumentlocation;
    };
    /**
     * Sets the sharepointdocumentlocation_parent_sharepointdocumentlocation property value. 
     * @param value Value to set for the sharepointdocumentlocation_parent_sharepointdocumentlocation property.
     */
    public set sharepointdocumentlocation_parent_sharepointdocumentlocation(value: Sharepointdocumentlocation[] | undefined) {
        this._sharepointdocumentlocation_parent_sharepointdocumentlocation = value;
    };
    /**
     * Gets the sharepointdocumentlocation_principalobjectattributeaccess property value. 
     * @returns a principalobjectattributeaccess
     */
    public get sharepointdocumentlocation_principalobjectattributeaccess() {
        return this._sharepointdocumentlocation_principalobjectattributeaccess;
    };
    /**
     * Sets the sharepointdocumentlocation_principalobjectattributeaccess property value. 
     * @param value Value to set for the sharepointdocumentlocation_principalobjectattributeaccess property.
     */
    public set sharepointdocumentlocation_principalobjectattributeaccess(value: Principalobjectattributeaccess[] | undefined) {
        this._sharepointdocumentlocation_principalobjectattributeaccess = value;
    };
    /**
     * Gets the sharePointDocumentLocation_ProcessSessions property value. 
     * @returns a processsession
     */
    public get sharePointDocumentLocation_ProcessSessions() {
        return this._sharePointDocumentLocation_ProcessSessions;
    };
    /**
     * Sets the sharePointDocumentLocation_ProcessSessions property value. 
     * @param value Value to set for the SharePointDocumentLocation_ProcessSessions property.
     */
    public set sharePointDocumentLocation_ProcessSessions(value: Processsession[] | undefined) {
        this._sharePointDocumentLocation_ProcessSessions = value;
    };
    /**
     * Gets the sharePointDocumentLocation_SyncErrors property value. 
     * @returns a syncerror
     */
    public get sharePointDocumentLocation_SyncErrors() {
        return this._sharePointDocumentLocation_SyncErrors;
    };
    /**
     * Sets the sharePointDocumentLocation_SyncErrors property value. 
     * @param value Value to set for the SharePointDocumentLocation_SyncErrors property.
     */
    public set sharePointDocumentLocation_SyncErrors(value: Syncerror[] | undefined) {
        this._sharePointDocumentLocation_SyncErrors = value;
    };
    /**
     * Gets the sharepointdocumentlocationid property value. 
     * @returns a string
     */
    public get sharepointdocumentlocationid() {
        return this._sharepointdocumentlocationid;
    };
    /**
     * Sets the sharepointdocumentlocationid property value. 
     * @param value Value to set for the sharepointdocumentlocationid property.
     */
    public set sharepointdocumentlocationid(value: string | undefined) {
        this._sharepointdocumentlocationid = value;
    };
    /**
     * Gets the sitecollectionid property value. 
     * @returns a string
     */
    public get sitecollectionid() {
        return this._sitecollectionid;
    };
    /**
     * Sets the sitecollectionid property value. 
     * @param value Value to set for the sitecollectionid property.
     */
    public set sitecollectionid(value: string | undefined) {
        this._sitecollectionid = value;
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
     * Gets the userid property value. 
     * @returns a string
     */
    public get userid() {
        return this._userid;
    };
    /**
     * Sets the userid property value. 
     * @param value Value to set for the userid property.
     */
    public set userid(value: string | undefined) {
        this._userid = value;
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
