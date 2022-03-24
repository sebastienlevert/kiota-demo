import {createAccountFromDiscriminatorValue} from './createAccountFromDiscriminatorValue';
import {createAnnotationFromDiscriminatorValue} from './createAnnotationFromDiscriminatorValue';
import {createAsyncoperationFromDiscriminatorValue} from './createAsyncoperationFromDiscriminatorValue';
import {createBookableresourcecategoryFromDiscriminatorValue} from './createBookableresourcecategoryFromDiscriminatorValue';
import {createBookableresourceFromDiscriminatorValue} from './createBookableresourceFromDiscriminatorValue';
import {createBulkdeletefailureFromDiscriminatorValue} from './createBulkdeletefailureFromDiscriminatorValue';
import {createBusinessunitFromDiscriminatorValue} from './createBusinessunitFromDiscriminatorValue';
import {createContactFromDiscriminatorValue} from './createContactFromDiscriminatorValue';
import {createDuplicaterecordFromDiscriminatorValue} from './createDuplicaterecordFromDiscriminatorValue';
import {createMailboxtrackingfolderFromDiscriminatorValue} from './createMailboxtrackingfolderFromDiscriminatorValue';
import {createMsdyn_estimateFromDiscriminatorValue} from './createMsdyn_estimateFromDiscriminatorValue';
import {createMsdyn_estimatelineFromDiscriminatorValue} from './createMsdyn_estimatelineFromDiscriminatorValue';
import {createMsdyn_projectFromDiscriminatorValue} from './createMsdyn_projectFromDiscriminatorValue';
import {createMsdyn_projecttaskFromDiscriminatorValue} from './createMsdyn_projecttaskFromDiscriminatorValue';
import {createMsdyn_transactioncategoryFromDiscriminatorValue} from './createMsdyn_transactioncategoryFromDiscriminatorValue';
import {createPrincipalFromDiscriminatorValue} from './createPrincipalFromDiscriminatorValue';
import {createPrincipalobjectattributeaccessFromDiscriminatorValue} from './createPrincipalobjectattributeaccessFromDiscriminatorValue';
import {createProcesssessionFromDiscriminatorValue} from './createProcesssessionFromDiscriminatorValue';
import {createProductFromDiscriminatorValue} from './createProductFromDiscriminatorValue';
import {createSalesorderdetailFromDiscriminatorValue} from './createSalesorderdetailFromDiscriminatorValue';
import {createSalesorderFromDiscriminatorValue} from './createSalesorderFromDiscriminatorValue';
import {createSyncerrorFromDiscriminatorValue} from './createSyncerrorFromDiscriminatorValue';
import {createSystemuserFromDiscriminatorValue} from './createSystemuserFromDiscriminatorValue';
import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {createTransactioncurrencyFromDiscriminatorValue} from './createTransactioncurrencyFromDiscriminatorValue';
import {Account, Annotation, Asyncoperation, Bookableresource, Bookableresourcecategory, Bulkdeletefailure, Businessunit, Contact, Crmbaseentity, Duplicaterecord, Mailboxtrackingfolder, Msdyn_estimate, Msdyn_estimateline, Msdyn_project, Msdyn_projecttask, Msdyn_transactioncategory, Principal, Principalobjectattributeaccess, Processsession, Product, Salesorder, Salesorderdetail, Syncerror, Systemuser, Team, Transactioncurrency} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Msdyn_fact extends Crmbaseentity implements Parsable {
    private __createdby_value?: string | undefined;
    private __createdonbehalfby_value?: string | undefined;
    private __modifiedby_value?: string | undefined;
    private __modifiedonbehalfby_value?: string | undefined;
    private __msdyn_accountcustomer_value?: string | undefined;
    private __msdyn_accountvendor_value?: string | undefined;
    private __msdyn_bookableresource_value?: string | undefined;
    private __msdyn_contactcustomer_value?: string | undefined;
    private __msdyn_contactvendor_value?: string | undefined;
    private __msdyn_estimate_value?: string | undefined;
    private __msdyn_estimatelineid_value?: string | undefined;
    private __msdyn_product_value?: string | undefined;
    private __msdyn_project_value?: string | undefined;
    private __msdyn_resourcecategory_value?: string | undefined;
    private __msdyn_salescontract_value?: string | undefined;
    private __msdyn_salescontractlineid_value?: string | undefined;
    private __msdyn_task_value?: string | undefined;
    private __msdyn_transactioncategory_value?: string | undefined;
    private __ownerid_value?: string | undefined;
    private __owningbusinessunit_value?: string | undefined;
    private __owningteam_value?: string | undefined;
    private __owninguser_value?: string | undefined;
    private __transactioncurrencyid_value?: string | undefined;
    private _createdby?: Systemuser | undefined;
    private _createdon?: Date | undefined;
    private _createdonbehalfby?: Systemuser | undefined;
    private _exchangerate?: number | undefined;
    private _importsequencenumber?: number | undefined;
    private _modifiedby?: Systemuser | undefined;
    private _modifiedon?: Date | undefined;
    private _modifiedonbehalfby?: Systemuser | undefined;
    private _msdyn_AccountCustomer?: Account | undefined;
    private _msdyn_AccountVendor?: Account | undefined;
    private _msdyn_actchargeablebilledsalesamount?: number | undefined;
    private _msdyn_actchargeablebilledsalesamount_base?: number | undefined;
    private _msdyn_actchargeablebilledsalesquantity?: number | undefined;
    private _msdyn_actchargeablecostamount?: number | undefined;
    private _msdyn_actchargeablecostamount_base?: number | undefined;
    private _msdyn_actchargeablecostquantity?: number | undefined;
    private _msdyn_actchargeableunbilledsalesamount?: number | undefined;
    private _msdyn_actchargeableunbilledsalesamount_base?: number | undefined;
    private _msdyn_actchargeableunbilledsalesquantity?: number | undefined;
    private _msdyn_actnochargebilledsalesamount?: number | undefined;
    private _msdyn_actnochargebilledsalesamount_base?: number | undefined;
    private _msdyn_actnochargebilledsalesquantity?: number | undefined;
    private _msdyn_actnochargecostamount?: number | undefined;
    private _msdyn_actnochargecostamount_base?: number | undefined;
    private _msdyn_actnochargecostquantity?: number | undefined;
    private _msdyn_actnochargeunbilledsalesamount?: number | undefined;
    private _msdyn_actnochargeunbilledsalesamount_base?: number | undefined;
    private _msdyn_actnochargeunbilledsalesquantity?: number | undefined;
    private _msdyn_actnonchargeablecostamount?: number | undefined;
    private _msdyn_actnonchargeablecostamount_base?: number | undefined;
    private _msdyn_actnonchargeablecostquantity?: number | undefined;
    private _msdyn_actnonchargeableunbilledsalesamount?: number | undefined;
    private _msdyn_actnonchargeableunbilledsalesamount_base?: number | undefined;
    private _msdyn_actnonchargeableunbilledsalesquantity?: number | undefined;
    private _msdyn_bookableresource?: Bookableresource | undefined;
    private _msdyn_ContactCustomer?: Contact | undefined;
    private _msdyn_ContactVendor?: Contact | undefined;
    private _msdyn_customertype?: number | undefined;
    private _msdyn_documentdate?: Date | undefined;
    private _msdyn_earnedrevenue?: number | undefined;
    private _msdyn_earnedrevenue_base?: number | undefined;
    private _msdyn_enddate?: Date | undefined;
    private _msdyn_estchargeablebilledsalesamount?: number | undefined;
    private _msdyn_estchargeablebilledsalesamount_base?: number | undefined;
    private _msdyn_estchargeablebilledsalesquantity?: number | undefined;
    private _msdyn_estchargeablecostamount?: number | undefined;
    private _msdyn_estchargeablecostamount_base?: number | undefined;
    private _msdyn_estchargeablecostquantity?: number | undefined;
    private _msdyn_estchargeableunbilledsalesamount?: number | undefined;
    private _msdyn_estchargeableunbilledsalesamount_base?: number | undefined;
    private _msdyn_estchargeableunbilledsalesquantity?: number | undefined;
    private _msdyn_Estimate?: Msdyn_estimate | undefined;
    private _msdyn_estimatelineid?: Msdyn_estimateline | undefined;
    private _msdyn_estnochargebilledsalesamount?: number | undefined;
    private _msdyn_estnochargebilledsalesamount_base?: number | undefined;
    private _msdyn_estnochargebilledsalesquantity?: number | undefined;
    private _msdyn_estnochargecostamount?: number | undefined;
    private _msdyn_estnochargecostamount_base?: number | undefined;
    private _msdyn_estnochargecostquantity?: number | undefined;
    private _msdyn_estnochargeunbilledsalesamount?: number | undefined;
    private _msdyn_estnochargeunbilledsalesamount_base?: number | undefined;
    private _msdyn_estnochargeunbilledsalesquantity?: number | undefined;
    private _msdyn_estnonchargeablecostamount?: number | undefined;
    private _msdyn_estnonchargeablecostamount_base?: number | undefined;
    private _msdyn_estnonchargeablecostquantity?: number | undefined;
    private _msdyn_estnonchargeableunbilledsalesamount?: number | undefined;
    private _msdyn_estnonchargeableunbilledsalesamount_base?: number | undefined;
    private _msdyn_estnonchargeableunbilledsalesquantity?: number | undefined;
    private _msdyn_fact_Annotations?: Annotation[] | undefined;
    private _msdyn_fact_AsyncOperations?: Asyncoperation[] | undefined;
    private _msdyn_fact_BulkDeleteFailures?: Bulkdeletefailure[] | undefined;
    private _msdyn_fact_DuplicateBaseRecord?: Duplicaterecord[] | undefined;
    private _msdyn_fact_DuplicateMatchingRecord?: Duplicaterecord[] | undefined;
    private _msdyn_fact_MailboxTrackingFolders?: Mailboxtrackingfolder[] | undefined;
    private _msdyn_fact_PrincipalObjectAttributeAccesses?: Principalobjectattributeaccess[] | undefined;
    private _msdyn_fact_ProcessSession?: Processsession[] | undefined;
    private _msdyn_fact_SyncErrors?: Syncerror[] | undefined;
    private _msdyn_factid?: string | undefined;
    private _msdyn_facttype?: number | undefined;
    private _msdyn_grossmargin?: number | undefined;
    private _msdyn_grossmargin_base?: number | undefined;
    private _msdyn_name?: string | undefined;
    private _msdyn_Product?: Product | undefined;
    private _msdyn_Project?: Msdyn_project | undefined;
    private _msdyn_ResourceCategory?: Bookableresourcecategory | undefined;
    private _msdyn_SalesContract?: Salesorder | undefined;
    private _msdyn_salescontractline?: string | undefined;
    private _msdyn_SalesContractLineId?: Salesorderdetail | undefined;
    private _msdyn_startdate?: Date | undefined;
    private _msdyn_Task?: Msdyn_projecttask | undefined;
    private _msdyn_totalcost?: number | undefined;
    private _msdyn_totalcost_base?: number | undefined;
    private _msdyn_totalhours?: number | undefined;
    private _msdyn_TransactionCategory?: Msdyn_transactioncategory | undefined;
    private _msdyn_transactionclassification?: number | undefined;
    private _msdyn_vendortype?: number | undefined;
    private _overriddencreatedon?: Date | undefined;
    private _ownerid?: Principal | undefined;
    private _owningbusinessunit?: Businessunit | undefined;
    private _owningteam?: Team | undefined;
    private _owninguser?: Systemuser | undefined;
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
     * Gets the _msdyn_accountcustomer_value property value. 
     * @returns a string
     */
    public get _msdyn_accountcustomer_value() {
        return this.__msdyn_accountcustomer_value;
    };
    /**
     * Sets the _msdyn_accountcustomer_value property value. 
     * @param value Value to set for the _msdyn_accountcustomer_value property.
     */
    public set _msdyn_accountcustomer_value(value: string | undefined) {
        this.__msdyn_accountcustomer_value = value;
    };
    /**
     * Gets the _msdyn_accountvendor_value property value. 
     * @returns a string
     */
    public get _msdyn_accountvendor_value() {
        return this.__msdyn_accountvendor_value;
    };
    /**
     * Sets the _msdyn_accountvendor_value property value. 
     * @param value Value to set for the _msdyn_accountvendor_value property.
     */
    public set _msdyn_accountvendor_value(value: string | undefined) {
        this.__msdyn_accountvendor_value = value;
    };
    /**
     * Gets the _msdyn_bookableresource_value property value. 
     * @returns a string
     */
    public get _msdyn_bookableresource_value() {
        return this.__msdyn_bookableresource_value;
    };
    /**
     * Sets the _msdyn_bookableresource_value property value. 
     * @param value Value to set for the _msdyn_bookableresource_value property.
     */
    public set _msdyn_bookableresource_value(value: string | undefined) {
        this.__msdyn_bookableresource_value = value;
    };
    /**
     * Gets the _msdyn_contactcustomer_value property value. 
     * @returns a string
     */
    public get _msdyn_contactcustomer_value() {
        return this.__msdyn_contactcustomer_value;
    };
    /**
     * Sets the _msdyn_contactcustomer_value property value. 
     * @param value Value to set for the _msdyn_contactcustomer_value property.
     */
    public set _msdyn_contactcustomer_value(value: string | undefined) {
        this.__msdyn_contactcustomer_value = value;
    };
    /**
     * Gets the _msdyn_contactvendor_value property value. 
     * @returns a string
     */
    public get _msdyn_contactvendor_value() {
        return this.__msdyn_contactvendor_value;
    };
    /**
     * Sets the _msdyn_contactvendor_value property value. 
     * @param value Value to set for the _msdyn_contactvendor_value property.
     */
    public set _msdyn_contactvendor_value(value: string | undefined) {
        this.__msdyn_contactvendor_value = value;
    };
    /**
     * Gets the _msdyn_estimate_value property value. 
     * @returns a string
     */
    public get _msdyn_estimate_value() {
        return this.__msdyn_estimate_value;
    };
    /**
     * Sets the _msdyn_estimate_value property value. 
     * @param value Value to set for the _msdyn_estimate_value property.
     */
    public set _msdyn_estimate_value(value: string | undefined) {
        this.__msdyn_estimate_value = value;
    };
    /**
     * Gets the _msdyn_estimatelineid_value property value. 
     * @returns a string
     */
    public get _msdyn_estimatelineid_value() {
        return this.__msdyn_estimatelineid_value;
    };
    /**
     * Sets the _msdyn_estimatelineid_value property value. 
     * @param value Value to set for the _msdyn_estimatelineid_value property.
     */
    public set _msdyn_estimatelineid_value(value: string | undefined) {
        this.__msdyn_estimatelineid_value = value;
    };
    /**
     * Gets the _msdyn_product_value property value. 
     * @returns a string
     */
    public get _msdyn_product_value() {
        return this.__msdyn_product_value;
    };
    /**
     * Sets the _msdyn_product_value property value. 
     * @param value Value to set for the _msdyn_product_value property.
     */
    public set _msdyn_product_value(value: string | undefined) {
        this.__msdyn_product_value = value;
    };
    /**
     * Gets the _msdyn_project_value property value. 
     * @returns a string
     */
    public get _msdyn_project_value() {
        return this.__msdyn_project_value;
    };
    /**
     * Sets the _msdyn_project_value property value. 
     * @param value Value to set for the _msdyn_project_value property.
     */
    public set _msdyn_project_value(value: string | undefined) {
        this.__msdyn_project_value = value;
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
     * Gets the _msdyn_salescontract_value property value. 
     * @returns a string
     */
    public get _msdyn_salescontract_value() {
        return this.__msdyn_salescontract_value;
    };
    /**
     * Sets the _msdyn_salescontract_value property value. 
     * @param value Value to set for the _msdyn_salescontract_value property.
     */
    public set _msdyn_salescontract_value(value: string | undefined) {
        this.__msdyn_salescontract_value = value;
    };
    /**
     * Gets the _msdyn_salescontractlineid_value property value. 
     * @returns a string
     */
    public get _msdyn_salescontractlineid_value() {
        return this.__msdyn_salescontractlineid_value;
    };
    /**
     * Sets the _msdyn_salescontractlineid_value property value. 
     * @param value Value to set for the _msdyn_salescontractlineid_value property.
     */
    public set _msdyn_salescontractlineid_value(value: string | undefined) {
        this.__msdyn_salescontractlineid_value = value;
    };
    /**
     * Gets the _msdyn_task_value property value. 
     * @returns a string
     */
    public get _msdyn_task_value() {
        return this.__msdyn_task_value;
    };
    /**
     * Sets the _msdyn_task_value property value. 
     * @param value Value to set for the _msdyn_task_value property.
     */
    public set _msdyn_task_value(value: string | undefined) {
        this.__msdyn_task_value = value;
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
     * Instantiates a new msdyn_fact and sets the default values.
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
            "_createdby_value": (o, n) => { (o as unknown as Msdyn_fact)._createdby_value = n.getStringValue(); },
            "_createdonbehalfby_value": (o, n) => { (o as unknown as Msdyn_fact)._createdonbehalfby_value = n.getStringValue(); },
            "_modifiedby_value": (o, n) => { (o as unknown as Msdyn_fact)._modifiedby_value = n.getStringValue(); },
            "_modifiedonbehalfby_value": (o, n) => { (o as unknown as Msdyn_fact)._modifiedonbehalfby_value = n.getStringValue(); },
            "_msdyn_accountcustomer_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_accountcustomer_value = n.getStringValue(); },
            "_msdyn_accountvendor_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_accountvendor_value = n.getStringValue(); },
            "_msdyn_bookableresource_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_bookableresource_value = n.getStringValue(); },
            "_msdyn_contactcustomer_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_contactcustomer_value = n.getStringValue(); },
            "_msdyn_contactvendor_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_contactvendor_value = n.getStringValue(); },
            "_msdyn_estimate_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_estimate_value = n.getStringValue(); },
            "_msdyn_estimatelineid_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_estimatelineid_value = n.getStringValue(); },
            "_msdyn_product_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_product_value = n.getStringValue(); },
            "_msdyn_project_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_project_value = n.getStringValue(); },
            "_msdyn_resourcecategory_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_resourcecategory_value = n.getStringValue(); },
            "_msdyn_salescontract_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_salescontract_value = n.getStringValue(); },
            "_msdyn_salescontractlineid_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_salescontractlineid_value = n.getStringValue(); },
            "_msdyn_task_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_task_value = n.getStringValue(); },
            "_msdyn_transactioncategory_value": (o, n) => { (o as unknown as Msdyn_fact)._msdyn_transactioncategory_value = n.getStringValue(); },
            "_ownerid_value": (o, n) => { (o as unknown as Msdyn_fact)._ownerid_value = n.getStringValue(); },
            "_owningbusinessunit_value": (o, n) => { (o as unknown as Msdyn_fact)._owningbusinessunit_value = n.getStringValue(); },
            "_owningteam_value": (o, n) => { (o as unknown as Msdyn_fact)._owningteam_value = n.getStringValue(); },
            "_owninguser_value": (o, n) => { (o as unknown as Msdyn_fact)._owninguser_value = n.getStringValue(); },
            "_transactioncurrencyid_value": (o, n) => { (o as unknown as Msdyn_fact)._transactioncurrencyid_value = n.getStringValue(); },
            "createdby": (o, n) => { (o as unknown as Msdyn_fact).createdby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "createdon": (o, n) => { (o as unknown as Msdyn_fact).createdon = n.getDateValue(); },
            "createdonbehalfby": (o, n) => { (o as unknown as Msdyn_fact).createdonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "exchangerate": (o, n) => { (o as unknown as Msdyn_fact).exchangerate = n.getNumberValue(); },
            "importsequencenumber": (o, n) => { (o as unknown as Msdyn_fact).importsequencenumber = n.getNumberValue(); },
            "modifiedby": (o, n) => { (o as unknown as Msdyn_fact).modifiedby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "modifiedon": (o, n) => { (o as unknown as Msdyn_fact).modifiedon = n.getDateValue(); },
            "modifiedonbehalfby": (o, n) => { (o as unknown as Msdyn_fact).modifiedonbehalfby = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "msdyn_AccountCustomer": (o, n) => { (o as unknown as Msdyn_fact).msdyn_AccountCustomer = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_AccountVendor": (o, n) => { (o as unknown as Msdyn_fact).msdyn_AccountVendor = n.getObjectValue<Account>(createAccountFromDiscriminatorValue); },
            "msdyn_actchargeablebilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actchargeablebilledsalesamount = n.getNumberValue(); },
            "msdyn_actchargeablebilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actchargeablebilledsalesamount_base = n.getNumberValue(); },
            "msdyn_actchargeablebilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actchargeablebilledsalesquantity = n.getNumberValue(); },
            "msdyn_actchargeablecostamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actchargeablecostamount = n.getNumberValue(); },
            "msdyn_actchargeablecostamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actchargeablecostamount_base = n.getNumberValue(); },
            "msdyn_actchargeablecostquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actchargeablecostquantity = n.getNumberValue(); },
            "msdyn_actchargeableunbilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actchargeableunbilledsalesamount = n.getNumberValue(); },
            "msdyn_actchargeableunbilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actchargeableunbilledsalesamount_base = n.getNumberValue(); },
            "msdyn_actchargeableunbilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actchargeableunbilledsalesquantity = n.getNumberValue(); },
            "msdyn_actnochargebilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnochargebilledsalesamount = n.getNumberValue(); },
            "msdyn_actnochargebilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnochargebilledsalesamount_base = n.getNumberValue(); },
            "msdyn_actnochargebilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnochargebilledsalesquantity = n.getNumberValue(); },
            "msdyn_actnochargecostamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnochargecostamount = n.getNumberValue(); },
            "msdyn_actnochargecostamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnochargecostamount_base = n.getNumberValue(); },
            "msdyn_actnochargecostquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnochargecostquantity = n.getNumberValue(); },
            "msdyn_actnochargeunbilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnochargeunbilledsalesamount = n.getNumberValue(); },
            "msdyn_actnochargeunbilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnochargeunbilledsalesamount_base = n.getNumberValue(); },
            "msdyn_actnochargeunbilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnochargeunbilledsalesquantity = n.getNumberValue(); },
            "msdyn_actnonchargeablecostamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnonchargeablecostamount = n.getNumberValue(); },
            "msdyn_actnonchargeablecostamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnonchargeablecostamount_base = n.getNumberValue(); },
            "msdyn_actnonchargeablecostquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnonchargeablecostquantity = n.getNumberValue(); },
            "msdyn_actnonchargeableunbilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnonchargeableunbilledsalesamount = n.getNumberValue(); },
            "msdyn_actnonchargeableunbilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnonchargeableunbilledsalesamount_base = n.getNumberValue(); },
            "msdyn_actnonchargeableunbilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_actnonchargeableunbilledsalesquantity = n.getNumberValue(); },
            "msdyn_bookableresource": (o, n) => { (o as unknown as Msdyn_fact).msdyn_bookableresource = n.getObjectValue<Bookableresource>(createBookableresourceFromDiscriminatorValue); },
            "msdyn_ContactCustomer": (o, n) => { (o as unknown as Msdyn_fact).msdyn_ContactCustomer = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "msdyn_ContactVendor": (o, n) => { (o as unknown as Msdyn_fact).msdyn_ContactVendor = n.getObjectValue<Contact>(createContactFromDiscriminatorValue); },
            "msdyn_customertype": (o, n) => { (o as unknown as Msdyn_fact).msdyn_customertype = n.getNumberValue(); },
            "msdyn_documentdate": (o, n) => { (o as unknown as Msdyn_fact).msdyn_documentdate = n.getDateValue(); },
            "msdyn_earnedrevenue": (o, n) => { (o as unknown as Msdyn_fact).msdyn_earnedrevenue = n.getNumberValue(); },
            "msdyn_earnedrevenue_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_earnedrevenue_base = n.getNumberValue(); },
            "msdyn_enddate": (o, n) => { (o as unknown as Msdyn_fact).msdyn_enddate = n.getDateValue(); },
            "msdyn_estchargeablebilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estchargeablebilledsalesamount = n.getNumberValue(); },
            "msdyn_estchargeablebilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estchargeablebilledsalesamount_base = n.getNumberValue(); },
            "msdyn_estchargeablebilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estchargeablebilledsalesquantity = n.getNumberValue(); },
            "msdyn_estchargeablecostamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estchargeablecostamount = n.getNumberValue(); },
            "msdyn_estchargeablecostamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estchargeablecostamount_base = n.getNumberValue(); },
            "msdyn_estchargeablecostquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estchargeablecostquantity = n.getNumberValue(); },
            "msdyn_estchargeableunbilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estchargeableunbilledsalesamount = n.getNumberValue(); },
            "msdyn_estchargeableunbilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estchargeableunbilledsalesamount_base = n.getNumberValue(); },
            "msdyn_estchargeableunbilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estchargeableunbilledsalesquantity = n.getNumberValue(); },
            "msdyn_Estimate": (o, n) => { (o as unknown as Msdyn_fact).msdyn_Estimate = n.getObjectValue<Msdyn_estimate>(createMsdyn_estimateFromDiscriminatorValue); },
            "msdyn_estimatelineid": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estimatelineid = n.getObjectValue<Msdyn_estimateline>(createMsdyn_estimatelineFromDiscriminatorValue); },
            "msdyn_estnochargebilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnochargebilledsalesamount = n.getNumberValue(); },
            "msdyn_estnochargebilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnochargebilledsalesamount_base = n.getNumberValue(); },
            "msdyn_estnochargebilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnochargebilledsalesquantity = n.getNumberValue(); },
            "msdyn_estnochargecostamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnochargecostamount = n.getNumberValue(); },
            "msdyn_estnochargecostamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnochargecostamount_base = n.getNumberValue(); },
            "msdyn_estnochargecostquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnochargecostquantity = n.getNumberValue(); },
            "msdyn_estnochargeunbilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnochargeunbilledsalesamount = n.getNumberValue(); },
            "msdyn_estnochargeunbilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnochargeunbilledsalesamount_base = n.getNumberValue(); },
            "msdyn_estnochargeunbilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnochargeunbilledsalesquantity = n.getNumberValue(); },
            "msdyn_estnonchargeablecostamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnonchargeablecostamount = n.getNumberValue(); },
            "msdyn_estnonchargeablecostamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnonchargeablecostamount_base = n.getNumberValue(); },
            "msdyn_estnonchargeablecostquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnonchargeablecostquantity = n.getNumberValue(); },
            "msdyn_estnonchargeableunbilledsalesamount": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnonchargeableunbilledsalesamount = n.getNumberValue(); },
            "msdyn_estnonchargeableunbilledsalesamount_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnonchargeableunbilledsalesamount_base = n.getNumberValue(); },
            "msdyn_estnonchargeableunbilledsalesquantity": (o, n) => { (o as unknown as Msdyn_fact).msdyn_estnonchargeableunbilledsalesquantity = n.getNumberValue(); },
            "msdyn_fact_Annotations": (o, n) => { (o as unknown as Msdyn_fact).msdyn_fact_Annotations = n.getCollectionOfObjectValues<Annotation>(createAnnotationFromDiscriminatorValue); },
            "msdyn_fact_AsyncOperations": (o, n) => { (o as unknown as Msdyn_fact).msdyn_fact_AsyncOperations = n.getCollectionOfObjectValues<Asyncoperation>(createAsyncoperationFromDiscriminatorValue); },
            "msdyn_fact_BulkDeleteFailures": (o, n) => { (o as unknown as Msdyn_fact).msdyn_fact_BulkDeleteFailures = n.getCollectionOfObjectValues<Bulkdeletefailure>(createBulkdeletefailureFromDiscriminatorValue); },
            "msdyn_fact_DuplicateBaseRecord": (o, n) => { (o as unknown as Msdyn_fact).msdyn_fact_DuplicateBaseRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_fact_DuplicateMatchingRecord": (o, n) => { (o as unknown as Msdyn_fact).msdyn_fact_DuplicateMatchingRecord = n.getCollectionOfObjectValues<Duplicaterecord>(createDuplicaterecordFromDiscriminatorValue); },
            "msdyn_fact_MailboxTrackingFolders": (o, n) => { (o as unknown as Msdyn_fact).msdyn_fact_MailboxTrackingFolders = n.getCollectionOfObjectValues<Mailboxtrackingfolder>(createMailboxtrackingfolderFromDiscriminatorValue); },
            "msdyn_fact_PrincipalObjectAttributeAccesses": (o, n) => { (o as unknown as Msdyn_fact).msdyn_fact_PrincipalObjectAttributeAccesses = n.getCollectionOfObjectValues<Principalobjectattributeaccess>(createPrincipalobjectattributeaccessFromDiscriminatorValue); },
            "msdyn_fact_ProcessSession": (o, n) => { (o as unknown as Msdyn_fact).msdyn_fact_ProcessSession = n.getCollectionOfObjectValues<Processsession>(createProcesssessionFromDiscriminatorValue); },
            "msdyn_fact_SyncErrors": (o, n) => { (o as unknown as Msdyn_fact).msdyn_fact_SyncErrors = n.getCollectionOfObjectValues<Syncerror>(createSyncerrorFromDiscriminatorValue); },
            "msdyn_factid": (o, n) => { (o as unknown as Msdyn_fact).msdyn_factid = n.getStringValue(); },
            "msdyn_facttype": (o, n) => { (o as unknown as Msdyn_fact).msdyn_facttype = n.getNumberValue(); },
            "msdyn_grossmargin": (o, n) => { (o as unknown as Msdyn_fact).msdyn_grossmargin = n.getNumberValue(); },
            "msdyn_grossmargin_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_grossmargin_base = n.getNumberValue(); },
            "msdyn_name": (o, n) => { (o as unknown as Msdyn_fact).msdyn_name = n.getStringValue(); },
            "msdyn_Product": (o, n) => { (o as unknown as Msdyn_fact).msdyn_Product = n.getObjectValue<Product>(createProductFromDiscriminatorValue); },
            "msdyn_Project": (o, n) => { (o as unknown as Msdyn_fact).msdyn_Project = n.getObjectValue<Msdyn_project>(createMsdyn_projectFromDiscriminatorValue); },
            "msdyn_ResourceCategory": (o, n) => { (o as unknown as Msdyn_fact).msdyn_ResourceCategory = n.getObjectValue<Bookableresourcecategory>(createBookableresourcecategoryFromDiscriminatorValue); },
            "msdyn_SalesContract": (o, n) => { (o as unknown as Msdyn_fact).msdyn_SalesContract = n.getObjectValue<Salesorder>(createSalesorderFromDiscriminatorValue); },
            "msdyn_salescontractline": (o, n) => { (o as unknown as Msdyn_fact).msdyn_salescontractline = n.getStringValue(); },
            "msdyn_SalesContractLineId": (o, n) => { (o as unknown as Msdyn_fact).msdyn_SalesContractLineId = n.getObjectValue<Salesorderdetail>(createSalesorderdetailFromDiscriminatorValue); },
            "msdyn_startdate": (o, n) => { (o as unknown as Msdyn_fact).msdyn_startdate = n.getDateValue(); },
            "msdyn_Task": (o, n) => { (o as unknown as Msdyn_fact).msdyn_Task = n.getObjectValue<Msdyn_projecttask>(createMsdyn_projecttaskFromDiscriminatorValue); },
            "msdyn_totalcost": (o, n) => { (o as unknown as Msdyn_fact).msdyn_totalcost = n.getNumberValue(); },
            "msdyn_totalcost_base": (o, n) => { (o as unknown as Msdyn_fact).msdyn_totalcost_base = n.getNumberValue(); },
            "msdyn_totalhours": (o, n) => { (o as unknown as Msdyn_fact).msdyn_totalhours = n.getNumberValue(); },
            "msdyn_TransactionCategory": (o, n) => { (o as unknown as Msdyn_fact).msdyn_TransactionCategory = n.getObjectValue<Msdyn_transactioncategory>(createMsdyn_transactioncategoryFromDiscriminatorValue); },
            "msdyn_transactionclassification": (o, n) => { (o as unknown as Msdyn_fact).msdyn_transactionclassification = n.getNumberValue(); },
            "msdyn_vendortype": (o, n) => { (o as unknown as Msdyn_fact).msdyn_vendortype = n.getNumberValue(); },
            "overriddencreatedon": (o, n) => { (o as unknown as Msdyn_fact).overriddencreatedon = n.getDateValue(); },
            "ownerid": (o, n) => { (o as unknown as Msdyn_fact).ownerid = n.getObjectValue<Principal>(createPrincipalFromDiscriminatorValue); },
            "owningbusinessunit": (o, n) => { (o as unknown as Msdyn_fact).owningbusinessunit = n.getObjectValue<Businessunit>(createBusinessunitFromDiscriminatorValue); },
            "owningteam": (o, n) => { (o as unknown as Msdyn_fact).owningteam = n.getObjectValue<Team>(createTeamFromDiscriminatorValue); },
            "owninguser": (o, n) => { (o as unknown as Msdyn_fact).owninguser = n.getObjectValue<Systemuser>(createSystemuserFromDiscriminatorValue); },
            "statecode": (o, n) => { (o as unknown as Msdyn_fact).statecode = n.getNumberValue(); },
            "statuscode": (o, n) => { (o as unknown as Msdyn_fact).statuscode = n.getNumberValue(); },
            "timezoneruleversionnumber": (o, n) => { (o as unknown as Msdyn_fact).timezoneruleversionnumber = n.getNumberValue(); },
            "transactioncurrencyid": (o, n) => { (o as unknown as Msdyn_fact).transactioncurrencyid = n.getObjectValue<Transactioncurrency>(createTransactioncurrencyFromDiscriminatorValue); },
            "utcconversiontimezonecode": (o, n) => { (o as unknown as Msdyn_fact).utcconversiontimezonecode = n.getNumberValue(); },
            "versionnumber": (o, n) => { (o as unknown as Msdyn_fact).versionnumber = n.getNumberValue(); },
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
     * Gets the msdyn_AccountCustomer property value. 
     * @returns a account
     */
    public get msdyn_AccountCustomer() {
        return this._msdyn_AccountCustomer;
    };
    /**
     * Sets the msdyn_AccountCustomer property value. 
     * @param value Value to set for the msdyn_AccountCustomer property.
     */
    public set msdyn_AccountCustomer(value: Account | undefined) {
        this._msdyn_AccountCustomer = value;
    };
    /**
     * Gets the msdyn_AccountVendor property value. 
     * @returns a account
     */
    public get msdyn_AccountVendor() {
        return this._msdyn_AccountVendor;
    };
    /**
     * Sets the msdyn_AccountVendor property value. 
     * @param value Value to set for the msdyn_AccountVendor property.
     */
    public set msdyn_AccountVendor(value: Account | undefined) {
        this._msdyn_AccountVendor = value;
    };
    /**
     * Gets the msdyn_actchargeablebilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_actchargeablebilledsalesamount() {
        return this._msdyn_actchargeablebilledsalesamount;
    };
    /**
     * Sets the msdyn_actchargeablebilledsalesamount property value. 
     * @param value Value to set for the msdyn_actchargeablebilledsalesamount property.
     */
    public set msdyn_actchargeablebilledsalesamount(value: number | undefined) {
        this._msdyn_actchargeablebilledsalesamount = value;
    };
    /**
     * Gets the msdyn_actchargeablebilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_actchargeablebilledsalesamount_base() {
        return this._msdyn_actchargeablebilledsalesamount_base;
    };
    /**
     * Sets the msdyn_actchargeablebilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_actchargeablebilledsalesamount_base property.
     */
    public set msdyn_actchargeablebilledsalesamount_base(value: number | undefined) {
        this._msdyn_actchargeablebilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_actchargeablebilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_actchargeablebilledsalesquantity() {
        return this._msdyn_actchargeablebilledsalesquantity;
    };
    /**
     * Sets the msdyn_actchargeablebilledsalesquantity property value. 
     * @param value Value to set for the msdyn_actchargeablebilledsalesquantity property.
     */
    public set msdyn_actchargeablebilledsalesquantity(value: number | undefined) {
        this._msdyn_actchargeablebilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_actchargeablecostamount property value. 
     * @returns a int64
     */
    public get msdyn_actchargeablecostamount() {
        return this._msdyn_actchargeablecostamount;
    };
    /**
     * Sets the msdyn_actchargeablecostamount property value. 
     * @param value Value to set for the msdyn_actchargeablecostamount property.
     */
    public set msdyn_actchargeablecostamount(value: number | undefined) {
        this._msdyn_actchargeablecostamount = value;
    };
    /**
     * Gets the msdyn_actchargeablecostamount_base property value. 
     * @returns a int64
     */
    public get msdyn_actchargeablecostamount_base() {
        return this._msdyn_actchargeablecostamount_base;
    };
    /**
     * Sets the msdyn_actchargeablecostamount_base property value. 
     * @param value Value to set for the msdyn_actchargeablecostamount_base property.
     */
    public set msdyn_actchargeablecostamount_base(value: number | undefined) {
        this._msdyn_actchargeablecostamount_base = value;
    };
    /**
     * Gets the msdyn_actchargeablecostquantity property value. 
     * @returns a int64
     */
    public get msdyn_actchargeablecostquantity() {
        return this._msdyn_actchargeablecostquantity;
    };
    /**
     * Sets the msdyn_actchargeablecostquantity property value. 
     * @param value Value to set for the msdyn_actchargeablecostquantity property.
     */
    public set msdyn_actchargeablecostquantity(value: number | undefined) {
        this._msdyn_actchargeablecostquantity = value;
    };
    /**
     * Gets the msdyn_actchargeableunbilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_actchargeableunbilledsalesamount() {
        return this._msdyn_actchargeableunbilledsalesamount;
    };
    /**
     * Sets the msdyn_actchargeableunbilledsalesamount property value. 
     * @param value Value to set for the msdyn_actchargeableunbilledsalesamount property.
     */
    public set msdyn_actchargeableunbilledsalesamount(value: number | undefined) {
        this._msdyn_actchargeableunbilledsalesamount = value;
    };
    /**
     * Gets the msdyn_actchargeableunbilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_actchargeableunbilledsalesamount_base() {
        return this._msdyn_actchargeableunbilledsalesamount_base;
    };
    /**
     * Sets the msdyn_actchargeableunbilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_actchargeableunbilledsalesamount_base property.
     */
    public set msdyn_actchargeableunbilledsalesamount_base(value: number | undefined) {
        this._msdyn_actchargeableunbilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_actchargeableunbilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_actchargeableunbilledsalesquantity() {
        return this._msdyn_actchargeableunbilledsalesquantity;
    };
    /**
     * Sets the msdyn_actchargeableunbilledsalesquantity property value. 
     * @param value Value to set for the msdyn_actchargeableunbilledsalesquantity property.
     */
    public set msdyn_actchargeableunbilledsalesquantity(value: number | undefined) {
        this._msdyn_actchargeableunbilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_actnochargebilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_actnochargebilledsalesamount() {
        return this._msdyn_actnochargebilledsalesamount;
    };
    /**
     * Sets the msdyn_actnochargebilledsalesamount property value. 
     * @param value Value to set for the msdyn_actnochargebilledsalesamount property.
     */
    public set msdyn_actnochargebilledsalesamount(value: number | undefined) {
        this._msdyn_actnochargebilledsalesamount = value;
    };
    /**
     * Gets the msdyn_actnochargebilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_actnochargebilledsalesamount_base() {
        return this._msdyn_actnochargebilledsalesamount_base;
    };
    /**
     * Sets the msdyn_actnochargebilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_actnochargebilledsalesamount_base property.
     */
    public set msdyn_actnochargebilledsalesamount_base(value: number | undefined) {
        this._msdyn_actnochargebilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_actnochargebilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_actnochargebilledsalesquantity() {
        return this._msdyn_actnochargebilledsalesquantity;
    };
    /**
     * Sets the msdyn_actnochargebilledsalesquantity property value. 
     * @param value Value to set for the msdyn_actnochargebilledsalesquantity property.
     */
    public set msdyn_actnochargebilledsalesquantity(value: number | undefined) {
        this._msdyn_actnochargebilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_actnochargecostamount property value. 
     * @returns a int64
     */
    public get msdyn_actnochargecostamount() {
        return this._msdyn_actnochargecostamount;
    };
    /**
     * Sets the msdyn_actnochargecostamount property value. 
     * @param value Value to set for the msdyn_actnochargecostamount property.
     */
    public set msdyn_actnochargecostamount(value: number | undefined) {
        this._msdyn_actnochargecostamount = value;
    };
    /**
     * Gets the msdyn_actnochargecostamount_base property value. 
     * @returns a int64
     */
    public get msdyn_actnochargecostamount_base() {
        return this._msdyn_actnochargecostamount_base;
    };
    /**
     * Sets the msdyn_actnochargecostamount_base property value. 
     * @param value Value to set for the msdyn_actnochargecostamount_base property.
     */
    public set msdyn_actnochargecostamount_base(value: number | undefined) {
        this._msdyn_actnochargecostamount_base = value;
    };
    /**
     * Gets the msdyn_actnochargecostquantity property value. 
     * @returns a int64
     */
    public get msdyn_actnochargecostquantity() {
        return this._msdyn_actnochargecostquantity;
    };
    /**
     * Sets the msdyn_actnochargecostquantity property value. 
     * @param value Value to set for the msdyn_actnochargecostquantity property.
     */
    public set msdyn_actnochargecostquantity(value: number | undefined) {
        this._msdyn_actnochargecostquantity = value;
    };
    /**
     * Gets the msdyn_actnochargeunbilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_actnochargeunbilledsalesamount() {
        return this._msdyn_actnochargeunbilledsalesamount;
    };
    /**
     * Sets the msdyn_actnochargeunbilledsalesamount property value. 
     * @param value Value to set for the msdyn_actnochargeunbilledsalesamount property.
     */
    public set msdyn_actnochargeunbilledsalesamount(value: number | undefined) {
        this._msdyn_actnochargeunbilledsalesamount = value;
    };
    /**
     * Gets the msdyn_actnochargeunbilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_actnochargeunbilledsalesamount_base() {
        return this._msdyn_actnochargeunbilledsalesamount_base;
    };
    /**
     * Sets the msdyn_actnochargeunbilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_actnochargeunbilledsalesamount_base property.
     */
    public set msdyn_actnochargeunbilledsalesamount_base(value: number | undefined) {
        this._msdyn_actnochargeunbilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_actnochargeunbilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_actnochargeunbilledsalesquantity() {
        return this._msdyn_actnochargeunbilledsalesquantity;
    };
    /**
     * Sets the msdyn_actnochargeunbilledsalesquantity property value. 
     * @param value Value to set for the msdyn_actnochargeunbilledsalesquantity property.
     */
    public set msdyn_actnochargeunbilledsalesquantity(value: number | undefined) {
        this._msdyn_actnochargeunbilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_actnonchargeablecostamount property value. 
     * @returns a int64
     */
    public get msdyn_actnonchargeablecostamount() {
        return this._msdyn_actnonchargeablecostamount;
    };
    /**
     * Sets the msdyn_actnonchargeablecostamount property value. 
     * @param value Value to set for the msdyn_actnonchargeablecostamount property.
     */
    public set msdyn_actnonchargeablecostamount(value: number | undefined) {
        this._msdyn_actnonchargeablecostamount = value;
    };
    /**
     * Gets the msdyn_actnonchargeablecostamount_base property value. 
     * @returns a int64
     */
    public get msdyn_actnonchargeablecostamount_base() {
        return this._msdyn_actnonchargeablecostamount_base;
    };
    /**
     * Sets the msdyn_actnonchargeablecostamount_base property value. 
     * @param value Value to set for the msdyn_actnonchargeablecostamount_base property.
     */
    public set msdyn_actnonchargeablecostamount_base(value: number | undefined) {
        this._msdyn_actnonchargeablecostamount_base = value;
    };
    /**
     * Gets the msdyn_actnonchargeablecostquantity property value. 
     * @returns a int64
     */
    public get msdyn_actnonchargeablecostquantity() {
        return this._msdyn_actnonchargeablecostquantity;
    };
    /**
     * Sets the msdyn_actnonchargeablecostquantity property value. 
     * @param value Value to set for the msdyn_actnonchargeablecostquantity property.
     */
    public set msdyn_actnonchargeablecostquantity(value: number | undefined) {
        this._msdyn_actnonchargeablecostquantity = value;
    };
    /**
     * Gets the msdyn_actnonchargeableunbilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_actnonchargeableunbilledsalesamount() {
        return this._msdyn_actnonchargeableunbilledsalesamount;
    };
    /**
     * Sets the msdyn_actnonchargeableunbilledsalesamount property value. 
     * @param value Value to set for the msdyn_actnonchargeableunbilledsalesamount property.
     */
    public set msdyn_actnonchargeableunbilledsalesamount(value: number | undefined) {
        this._msdyn_actnonchargeableunbilledsalesamount = value;
    };
    /**
     * Gets the msdyn_actnonchargeableunbilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_actnonchargeableunbilledsalesamount_base() {
        return this._msdyn_actnonchargeableunbilledsalesamount_base;
    };
    /**
     * Sets the msdyn_actnonchargeableunbilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_actnonchargeableunbilledsalesamount_base property.
     */
    public set msdyn_actnonchargeableunbilledsalesamount_base(value: number | undefined) {
        this._msdyn_actnonchargeableunbilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_actnonchargeableunbilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_actnonchargeableunbilledsalesquantity() {
        return this._msdyn_actnonchargeableunbilledsalesquantity;
    };
    /**
     * Sets the msdyn_actnonchargeableunbilledsalesquantity property value. 
     * @param value Value to set for the msdyn_actnonchargeableunbilledsalesquantity property.
     */
    public set msdyn_actnonchargeableunbilledsalesquantity(value: number | undefined) {
        this._msdyn_actnonchargeableunbilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_bookableresource property value. 
     * @returns a bookableresource
     */
    public get msdyn_bookableresource() {
        return this._msdyn_bookableresource;
    };
    /**
     * Sets the msdyn_bookableresource property value. 
     * @param value Value to set for the msdyn_bookableresource property.
     */
    public set msdyn_bookableresource(value: Bookableresource | undefined) {
        this._msdyn_bookableresource = value;
    };
    /**
     * Gets the msdyn_ContactCustomer property value. 
     * @returns a contact
     */
    public get msdyn_ContactCustomer() {
        return this._msdyn_ContactCustomer;
    };
    /**
     * Sets the msdyn_ContactCustomer property value. 
     * @param value Value to set for the msdyn_ContactCustomer property.
     */
    public set msdyn_ContactCustomer(value: Contact | undefined) {
        this._msdyn_ContactCustomer = value;
    };
    /**
     * Gets the msdyn_ContactVendor property value. 
     * @returns a contact
     */
    public get msdyn_ContactVendor() {
        return this._msdyn_ContactVendor;
    };
    /**
     * Sets the msdyn_ContactVendor property value. 
     * @param value Value to set for the msdyn_ContactVendor property.
     */
    public set msdyn_ContactVendor(value: Contact | undefined) {
        this._msdyn_ContactVendor = value;
    };
    /**
     * Gets the msdyn_customertype property value. 
     * @returns a integer
     */
    public get msdyn_customertype() {
        return this._msdyn_customertype;
    };
    /**
     * Sets the msdyn_customertype property value. 
     * @param value Value to set for the msdyn_customertype property.
     */
    public set msdyn_customertype(value: number | undefined) {
        this._msdyn_customertype = value;
    };
    /**
     * Gets the msdyn_documentdate property value. 
     * @returns a Date
     */
    public get msdyn_documentdate() {
        return this._msdyn_documentdate;
    };
    /**
     * Sets the msdyn_documentdate property value. 
     * @param value Value to set for the msdyn_documentdate property.
     */
    public set msdyn_documentdate(value: Date | undefined) {
        this._msdyn_documentdate = value;
    };
    /**
     * Gets the msdyn_earnedrevenue property value. 
     * @returns a int64
     */
    public get msdyn_earnedrevenue() {
        return this._msdyn_earnedrevenue;
    };
    /**
     * Sets the msdyn_earnedrevenue property value. 
     * @param value Value to set for the msdyn_earnedrevenue property.
     */
    public set msdyn_earnedrevenue(value: number | undefined) {
        this._msdyn_earnedrevenue = value;
    };
    /**
     * Gets the msdyn_earnedrevenue_base property value. 
     * @returns a int64
     */
    public get msdyn_earnedrevenue_base() {
        return this._msdyn_earnedrevenue_base;
    };
    /**
     * Sets the msdyn_earnedrevenue_base property value. 
     * @param value Value to set for the msdyn_earnedrevenue_base property.
     */
    public set msdyn_earnedrevenue_base(value: number | undefined) {
        this._msdyn_earnedrevenue_base = value;
    };
    /**
     * Gets the msdyn_enddate property value. 
     * @returns a Date
     */
    public get msdyn_enddate() {
        return this._msdyn_enddate;
    };
    /**
     * Sets the msdyn_enddate property value. 
     * @param value Value to set for the msdyn_enddate property.
     */
    public set msdyn_enddate(value: Date | undefined) {
        this._msdyn_enddate = value;
    };
    /**
     * Gets the msdyn_estchargeablebilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_estchargeablebilledsalesamount() {
        return this._msdyn_estchargeablebilledsalesamount;
    };
    /**
     * Sets the msdyn_estchargeablebilledsalesamount property value. 
     * @param value Value to set for the msdyn_estchargeablebilledsalesamount property.
     */
    public set msdyn_estchargeablebilledsalesamount(value: number | undefined) {
        this._msdyn_estchargeablebilledsalesamount = value;
    };
    /**
     * Gets the msdyn_estchargeablebilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estchargeablebilledsalesamount_base() {
        return this._msdyn_estchargeablebilledsalesamount_base;
    };
    /**
     * Sets the msdyn_estchargeablebilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_estchargeablebilledsalesamount_base property.
     */
    public set msdyn_estchargeablebilledsalesamount_base(value: number | undefined) {
        this._msdyn_estchargeablebilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_estchargeablebilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_estchargeablebilledsalesquantity() {
        return this._msdyn_estchargeablebilledsalesquantity;
    };
    /**
     * Sets the msdyn_estchargeablebilledsalesquantity property value. 
     * @param value Value to set for the msdyn_estchargeablebilledsalesquantity property.
     */
    public set msdyn_estchargeablebilledsalesquantity(value: number | undefined) {
        this._msdyn_estchargeablebilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_estchargeablecostamount property value. 
     * @returns a int64
     */
    public get msdyn_estchargeablecostamount() {
        return this._msdyn_estchargeablecostamount;
    };
    /**
     * Sets the msdyn_estchargeablecostamount property value. 
     * @param value Value to set for the msdyn_estchargeablecostamount property.
     */
    public set msdyn_estchargeablecostamount(value: number | undefined) {
        this._msdyn_estchargeablecostamount = value;
    };
    /**
     * Gets the msdyn_estchargeablecostamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estchargeablecostamount_base() {
        return this._msdyn_estchargeablecostamount_base;
    };
    /**
     * Sets the msdyn_estchargeablecostamount_base property value. 
     * @param value Value to set for the msdyn_estchargeablecostamount_base property.
     */
    public set msdyn_estchargeablecostamount_base(value: number | undefined) {
        this._msdyn_estchargeablecostamount_base = value;
    };
    /**
     * Gets the msdyn_estchargeablecostquantity property value. 
     * @returns a int64
     */
    public get msdyn_estchargeablecostquantity() {
        return this._msdyn_estchargeablecostquantity;
    };
    /**
     * Sets the msdyn_estchargeablecostquantity property value. 
     * @param value Value to set for the msdyn_estchargeablecostquantity property.
     */
    public set msdyn_estchargeablecostquantity(value: number | undefined) {
        this._msdyn_estchargeablecostquantity = value;
    };
    /**
     * Gets the msdyn_estchargeableunbilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_estchargeableunbilledsalesamount() {
        return this._msdyn_estchargeableunbilledsalesamount;
    };
    /**
     * Sets the msdyn_estchargeableunbilledsalesamount property value. 
     * @param value Value to set for the msdyn_estchargeableunbilledsalesamount property.
     */
    public set msdyn_estchargeableunbilledsalesamount(value: number | undefined) {
        this._msdyn_estchargeableunbilledsalesamount = value;
    };
    /**
     * Gets the msdyn_estchargeableunbilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estchargeableunbilledsalesamount_base() {
        return this._msdyn_estchargeableunbilledsalesamount_base;
    };
    /**
     * Sets the msdyn_estchargeableunbilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_estchargeableunbilledsalesamount_base property.
     */
    public set msdyn_estchargeableunbilledsalesamount_base(value: number | undefined) {
        this._msdyn_estchargeableunbilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_estchargeableunbilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_estchargeableunbilledsalesquantity() {
        return this._msdyn_estchargeableunbilledsalesquantity;
    };
    /**
     * Sets the msdyn_estchargeableunbilledsalesquantity property value. 
     * @param value Value to set for the msdyn_estchargeableunbilledsalesquantity property.
     */
    public set msdyn_estchargeableunbilledsalesquantity(value: number | undefined) {
        this._msdyn_estchargeableunbilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_Estimate property value. 
     * @returns a msdyn_estimate
     */
    public get msdyn_Estimate() {
        return this._msdyn_Estimate;
    };
    /**
     * Sets the msdyn_Estimate property value. 
     * @param value Value to set for the msdyn_Estimate property.
     */
    public set msdyn_Estimate(value: Msdyn_estimate | undefined) {
        this._msdyn_Estimate = value;
    };
    /**
     * Gets the msdyn_estimatelineid property value. 
     * @returns a msdyn_estimateline
     */
    public get msdyn_estimatelineid() {
        return this._msdyn_estimatelineid;
    };
    /**
     * Sets the msdyn_estimatelineid property value. 
     * @param value Value to set for the msdyn_estimatelineid property.
     */
    public set msdyn_estimatelineid(value: Msdyn_estimateline | undefined) {
        this._msdyn_estimatelineid = value;
    };
    /**
     * Gets the msdyn_estnochargebilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_estnochargebilledsalesamount() {
        return this._msdyn_estnochargebilledsalesamount;
    };
    /**
     * Sets the msdyn_estnochargebilledsalesamount property value. 
     * @param value Value to set for the msdyn_estnochargebilledsalesamount property.
     */
    public set msdyn_estnochargebilledsalesamount(value: number | undefined) {
        this._msdyn_estnochargebilledsalesamount = value;
    };
    /**
     * Gets the msdyn_estnochargebilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estnochargebilledsalesamount_base() {
        return this._msdyn_estnochargebilledsalesamount_base;
    };
    /**
     * Sets the msdyn_estnochargebilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_estnochargebilledsalesamount_base property.
     */
    public set msdyn_estnochargebilledsalesamount_base(value: number | undefined) {
        this._msdyn_estnochargebilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_estnochargebilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_estnochargebilledsalesquantity() {
        return this._msdyn_estnochargebilledsalesquantity;
    };
    /**
     * Sets the msdyn_estnochargebilledsalesquantity property value. 
     * @param value Value to set for the msdyn_estnochargebilledsalesquantity property.
     */
    public set msdyn_estnochargebilledsalesquantity(value: number | undefined) {
        this._msdyn_estnochargebilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_estnochargecostamount property value. 
     * @returns a int64
     */
    public get msdyn_estnochargecostamount() {
        return this._msdyn_estnochargecostamount;
    };
    /**
     * Sets the msdyn_estnochargecostamount property value. 
     * @param value Value to set for the msdyn_estnochargecostamount property.
     */
    public set msdyn_estnochargecostamount(value: number | undefined) {
        this._msdyn_estnochargecostamount = value;
    };
    /**
     * Gets the msdyn_estnochargecostamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estnochargecostamount_base() {
        return this._msdyn_estnochargecostamount_base;
    };
    /**
     * Sets the msdyn_estnochargecostamount_base property value. 
     * @param value Value to set for the msdyn_estnochargecostamount_base property.
     */
    public set msdyn_estnochargecostamount_base(value: number | undefined) {
        this._msdyn_estnochargecostamount_base = value;
    };
    /**
     * Gets the msdyn_estnochargecostquantity property value. 
     * @returns a int64
     */
    public get msdyn_estnochargecostquantity() {
        return this._msdyn_estnochargecostquantity;
    };
    /**
     * Sets the msdyn_estnochargecostquantity property value. 
     * @param value Value to set for the msdyn_estnochargecostquantity property.
     */
    public set msdyn_estnochargecostquantity(value: number | undefined) {
        this._msdyn_estnochargecostquantity = value;
    };
    /**
     * Gets the msdyn_estnochargeunbilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_estnochargeunbilledsalesamount() {
        return this._msdyn_estnochargeunbilledsalesamount;
    };
    /**
     * Sets the msdyn_estnochargeunbilledsalesamount property value. 
     * @param value Value to set for the msdyn_estnochargeunbilledsalesamount property.
     */
    public set msdyn_estnochargeunbilledsalesamount(value: number | undefined) {
        this._msdyn_estnochargeunbilledsalesamount = value;
    };
    /**
     * Gets the msdyn_estnochargeunbilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estnochargeunbilledsalesamount_base() {
        return this._msdyn_estnochargeunbilledsalesamount_base;
    };
    /**
     * Sets the msdyn_estnochargeunbilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_estnochargeunbilledsalesamount_base property.
     */
    public set msdyn_estnochargeunbilledsalesamount_base(value: number | undefined) {
        this._msdyn_estnochargeunbilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_estnochargeunbilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_estnochargeunbilledsalesquantity() {
        return this._msdyn_estnochargeunbilledsalesquantity;
    };
    /**
     * Sets the msdyn_estnochargeunbilledsalesquantity property value. 
     * @param value Value to set for the msdyn_estnochargeunbilledsalesquantity property.
     */
    public set msdyn_estnochargeunbilledsalesquantity(value: number | undefined) {
        this._msdyn_estnochargeunbilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_estnonchargeablecostamount property value. 
     * @returns a int64
     */
    public get msdyn_estnonchargeablecostamount() {
        return this._msdyn_estnonchargeablecostamount;
    };
    /**
     * Sets the msdyn_estnonchargeablecostamount property value. 
     * @param value Value to set for the msdyn_estnonchargeablecostamount property.
     */
    public set msdyn_estnonchargeablecostamount(value: number | undefined) {
        this._msdyn_estnonchargeablecostamount = value;
    };
    /**
     * Gets the msdyn_estnonchargeablecostamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estnonchargeablecostamount_base() {
        return this._msdyn_estnonchargeablecostamount_base;
    };
    /**
     * Sets the msdyn_estnonchargeablecostamount_base property value. 
     * @param value Value to set for the msdyn_estnonchargeablecostamount_base property.
     */
    public set msdyn_estnonchargeablecostamount_base(value: number | undefined) {
        this._msdyn_estnonchargeablecostamount_base = value;
    };
    /**
     * Gets the msdyn_estnonchargeablecostquantity property value. 
     * @returns a int64
     */
    public get msdyn_estnonchargeablecostquantity() {
        return this._msdyn_estnonchargeablecostquantity;
    };
    /**
     * Sets the msdyn_estnonchargeablecostquantity property value. 
     * @param value Value to set for the msdyn_estnonchargeablecostquantity property.
     */
    public set msdyn_estnonchargeablecostquantity(value: number | undefined) {
        this._msdyn_estnonchargeablecostquantity = value;
    };
    /**
     * Gets the msdyn_estnonchargeableunbilledsalesamount property value. 
     * @returns a int64
     */
    public get msdyn_estnonchargeableunbilledsalesamount() {
        return this._msdyn_estnonchargeableunbilledsalesamount;
    };
    /**
     * Sets the msdyn_estnonchargeableunbilledsalesamount property value. 
     * @param value Value to set for the msdyn_estnonchargeableunbilledsalesamount property.
     */
    public set msdyn_estnonchargeableunbilledsalesamount(value: number | undefined) {
        this._msdyn_estnonchargeableunbilledsalesamount = value;
    };
    /**
     * Gets the msdyn_estnonchargeableunbilledsalesamount_base property value. 
     * @returns a int64
     */
    public get msdyn_estnonchargeableunbilledsalesamount_base() {
        return this._msdyn_estnonchargeableunbilledsalesamount_base;
    };
    /**
     * Sets the msdyn_estnonchargeableunbilledsalesamount_base property value. 
     * @param value Value to set for the msdyn_estnonchargeableunbilledsalesamount_base property.
     */
    public set msdyn_estnonchargeableunbilledsalesamount_base(value: number | undefined) {
        this._msdyn_estnonchargeableunbilledsalesamount_base = value;
    };
    /**
     * Gets the msdyn_estnonchargeableunbilledsalesquantity property value. 
     * @returns a int64
     */
    public get msdyn_estnonchargeableunbilledsalesquantity() {
        return this._msdyn_estnonchargeableunbilledsalesquantity;
    };
    /**
     * Sets the msdyn_estnonchargeableunbilledsalesquantity property value. 
     * @param value Value to set for the msdyn_estnonchargeableunbilledsalesquantity property.
     */
    public set msdyn_estnonchargeableunbilledsalesquantity(value: number | undefined) {
        this._msdyn_estnonchargeableunbilledsalesquantity = value;
    };
    /**
     * Gets the msdyn_fact_Annotations property value. 
     * @returns a annotation
     */
    public get msdyn_fact_Annotations() {
        return this._msdyn_fact_Annotations;
    };
    /**
     * Sets the msdyn_fact_Annotations property value. 
     * @param value Value to set for the msdyn_fact_Annotations property.
     */
    public set msdyn_fact_Annotations(value: Annotation[] | undefined) {
        this._msdyn_fact_Annotations = value;
    };
    /**
     * Gets the msdyn_fact_AsyncOperations property value. 
     * @returns a asyncoperation
     */
    public get msdyn_fact_AsyncOperations() {
        return this._msdyn_fact_AsyncOperations;
    };
    /**
     * Sets the msdyn_fact_AsyncOperations property value. 
     * @param value Value to set for the msdyn_fact_AsyncOperations property.
     */
    public set msdyn_fact_AsyncOperations(value: Asyncoperation[] | undefined) {
        this._msdyn_fact_AsyncOperations = value;
    };
    /**
     * Gets the msdyn_fact_BulkDeleteFailures property value. 
     * @returns a bulkdeletefailure
     */
    public get msdyn_fact_BulkDeleteFailures() {
        return this._msdyn_fact_BulkDeleteFailures;
    };
    /**
     * Sets the msdyn_fact_BulkDeleteFailures property value. 
     * @param value Value to set for the msdyn_fact_BulkDeleteFailures property.
     */
    public set msdyn_fact_BulkDeleteFailures(value: Bulkdeletefailure[] | undefined) {
        this._msdyn_fact_BulkDeleteFailures = value;
    };
    /**
     * Gets the msdyn_fact_DuplicateBaseRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_fact_DuplicateBaseRecord() {
        return this._msdyn_fact_DuplicateBaseRecord;
    };
    /**
     * Sets the msdyn_fact_DuplicateBaseRecord property value. 
     * @param value Value to set for the msdyn_fact_DuplicateBaseRecord property.
     */
    public set msdyn_fact_DuplicateBaseRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_fact_DuplicateBaseRecord = value;
    };
    /**
     * Gets the msdyn_fact_DuplicateMatchingRecord property value. 
     * @returns a duplicaterecord
     */
    public get msdyn_fact_DuplicateMatchingRecord() {
        return this._msdyn_fact_DuplicateMatchingRecord;
    };
    /**
     * Sets the msdyn_fact_DuplicateMatchingRecord property value. 
     * @param value Value to set for the msdyn_fact_DuplicateMatchingRecord property.
     */
    public set msdyn_fact_DuplicateMatchingRecord(value: Duplicaterecord[] | undefined) {
        this._msdyn_fact_DuplicateMatchingRecord = value;
    };
    /**
     * Gets the msdyn_fact_MailboxTrackingFolders property value. 
     * @returns a mailboxtrackingfolder
     */
    public get msdyn_fact_MailboxTrackingFolders() {
        return this._msdyn_fact_MailboxTrackingFolders;
    };
    /**
     * Sets the msdyn_fact_MailboxTrackingFolders property value. 
     * @param value Value to set for the msdyn_fact_MailboxTrackingFolders property.
     */
    public set msdyn_fact_MailboxTrackingFolders(value: Mailboxtrackingfolder[] | undefined) {
        this._msdyn_fact_MailboxTrackingFolders = value;
    };
    /**
     * Gets the msdyn_fact_PrincipalObjectAttributeAccesses property value. 
     * @returns a principalobjectattributeaccess
     */
    public get msdyn_fact_PrincipalObjectAttributeAccesses() {
        return this._msdyn_fact_PrincipalObjectAttributeAccesses;
    };
    /**
     * Sets the msdyn_fact_PrincipalObjectAttributeAccesses property value. 
     * @param value Value to set for the msdyn_fact_PrincipalObjectAttributeAccesses property.
     */
    public set msdyn_fact_PrincipalObjectAttributeAccesses(value: Principalobjectattributeaccess[] | undefined) {
        this._msdyn_fact_PrincipalObjectAttributeAccesses = value;
    };
    /**
     * Gets the msdyn_fact_ProcessSession property value. 
     * @returns a processsession
     */
    public get msdyn_fact_ProcessSession() {
        return this._msdyn_fact_ProcessSession;
    };
    /**
     * Sets the msdyn_fact_ProcessSession property value. 
     * @param value Value to set for the msdyn_fact_ProcessSession property.
     */
    public set msdyn_fact_ProcessSession(value: Processsession[] | undefined) {
        this._msdyn_fact_ProcessSession = value;
    };
    /**
     * Gets the msdyn_fact_SyncErrors property value. 
     * @returns a syncerror
     */
    public get msdyn_fact_SyncErrors() {
        return this._msdyn_fact_SyncErrors;
    };
    /**
     * Sets the msdyn_fact_SyncErrors property value. 
     * @param value Value to set for the msdyn_fact_SyncErrors property.
     */
    public set msdyn_fact_SyncErrors(value: Syncerror[] | undefined) {
        this._msdyn_fact_SyncErrors = value;
    };
    /**
     * Gets the msdyn_factid property value. 
     * @returns a string
     */
    public get msdyn_factid() {
        return this._msdyn_factid;
    };
    /**
     * Sets the msdyn_factid property value. 
     * @param value Value to set for the msdyn_factid property.
     */
    public set msdyn_factid(value: string | undefined) {
        this._msdyn_factid = value;
    };
    /**
     * Gets the msdyn_facttype property value. 
     * @returns a integer
     */
    public get msdyn_facttype() {
        return this._msdyn_facttype;
    };
    /**
     * Sets the msdyn_facttype property value. 
     * @param value Value to set for the msdyn_facttype property.
     */
    public set msdyn_facttype(value: number | undefined) {
        this._msdyn_facttype = value;
    };
    /**
     * Gets the msdyn_grossmargin property value. 
     * @returns a int64
     */
    public get msdyn_grossmargin() {
        return this._msdyn_grossmargin;
    };
    /**
     * Sets the msdyn_grossmargin property value. 
     * @param value Value to set for the msdyn_grossmargin property.
     */
    public set msdyn_grossmargin(value: number | undefined) {
        this._msdyn_grossmargin = value;
    };
    /**
     * Gets the msdyn_grossmargin_base property value. 
     * @returns a int64
     */
    public get msdyn_grossmargin_base() {
        return this._msdyn_grossmargin_base;
    };
    /**
     * Sets the msdyn_grossmargin_base property value. 
     * @param value Value to set for the msdyn_grossmargin_base property.
     */
    public set msdyn_grossmargin_base(value: number | undefined) {
        this._msdyn_grossmargin_base = value;
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
     * Gets the msdyn_Product property value. 
     * @returns a product
     */
    public get msdyn_Product() {
        return this._msdyn_Product;
    };
    /**
     * Sets the msdyn_Product property value. 
     * @param value Value to set for the msdyn_Product property.
     */
    public set msdyn_Product(value: Product | undefined) {
        this._msdyn_Product = value;
    };
    /**
     * Gets the msdyn_Project property value. 
     * @returns a msdyn_project
     */
    public get msdyn_Project() {
        return this._msdyn_Project;
    };
    /**
     * Sets the msdyn_Project property value. 
     * @param value Value to set for the msdyn_Project property.
     */
    public set msdyn_Project(value: Msdyn_project | undefined) {
        this._msdyn_Project = value;
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
     * Gets the msdyn_SalesContract property value. 
     * @returns a salesorder
     */
    public get msdyn_SalesContract() {
        return this._msdyn_SalesContract;
    };
    /**
     * Sets the msdyn_SalesContract property value. 
     * @param value Value to set for the msdyn_SalesContract property.
     */
    public set msdyn_SalesContract(value: Salesorder | undefined) {
        this._msdyn_SalesContract = value;
    };
    /**
     * Gets the msdyn_salescontractline property value. 
     * @returns a string
     */
    public get msdyn_salescontractline() {
        return this._msdyn_salescontractline;
    };
    /**
     * Sets the msdyn_salescontractline property value. 
     * @param value Value to set for the msdyn_salescontractline property.
     */
    public set msdyn_salescontractline(value: string | undefined) {
        this._msdyn_salescontractline = value;
    };
    /**
     * Gets the msdyn_SalesContractLineId property value. 
     * @returns a salesorderdetail
     */
    public get msdyn_SalesContractLineId() {
        return this._msdyn_SalesContractLineId;
    };
    /**
     * Sets the msdyn_SalesContractLineId property value. 
     * @param value Value to set for the msdyn_SalesContractLineId property.
     */
    public set msdyn_SalesContractLineId(value: Salesorderdetail | undefined) {
        this._msdyn_SalesContractLineId = value;
    };
    /**
     * Gets the msdyn_startdate property value. 
     * @returns a Date
     */
    public get msdyn_startdate() {
        return this._msdyn_startdate;
    };
    /**
     * Sets the msdyn_startdate property value. 
     * @param value Value to set for the msdyn_startdate property.
     */
    public set msdyn_startdate(value: Date | undefined) {
        this._msdyn_startdate = value;
    };
    /**
     * Gets the msdyn_Task property value. 
     * @returns a msdyn_projecttask
     */
    public get msdyn_Task() {
        return this._msdyn_Task;
    };
    /**
     * Sets the msdyn_Task property value. 
     * @param value Value to set for the msdyn_Task property.
     */
    public set msdyn_Task(value: Msdyn_projecttask | undefined) {
        this._msdyn_Task = value;
    };
    /**
     * Gets the msdyn_totalcost property value. 
     * @returns a int64
     */
    public get msdyn_totalcost() {
        return this._msdyn_totalcost;
    };
    /**
     * Sets the msdyn_totalcost property value. 
     * @param value Value to set for the msdyn_totalcost property.
     */
    public set msdyn_totalcost(value: number | undefined) {
        this._msdyn_totalcost = value;
    };
    /**
     * Gets the msdyn_totalcost_base property value. 
     * @returns a int64
     */
    public get msdyn_totalcost_base() {
        return this._msdyn_totalcost_base;
    };
    /**
     * Sets the msdyn_totalcost_base property value. 
     * @param value Value to set for the msdyn_totalcost_base property.
     */
    public set msdyn_totalcost_base(value: number | undefined) {
        this._msdyn_totalcost_base = value;
    };
    /**
     * Gets the msdyn_totalhours property value. 
     * @returns a int64
     */
    public get msdyn_totalhours() {
        return this._msdyn_totalhours;
    };
    /**
     * Sets the msdyn_totalhours property value. 
     * @param value Value to set for the msdyn_totalhours property.
     */
    public set msdyn_totalhours(value: number | undefined) {
        this._msdyn_totalhours = value;
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
     * Gets the msdyn_vendortype property value. 
     * @returns a integer
     */
    public get msdyn_vendortype() {
        return this._msdyn_vendortype;
    };
    /**
     * Sets the msdyn_vendortype property value. 
     * @param value Value to set for the msdyn_vendortype property.
     */
    public set msdyn_vendortype(value: number | undefined) {
        this._msdyn_vendortype = value;
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
        writer.writeStringValue("_msdyn_accountcustomer_value", this._msdyn_accountcustomer_value);
        writer.writeStringValue("_msdyn_accountvendor_value", this._msdyn_accountvendor_value);
        writer.writeStringValue("_msdyn_bookableresource_value", this._msdyn_bookableresource_value);
        writer.writeStringValue("_msdyn_contactcustomer_value", this._msdyn_contactcustomer_value);
        writer.writeStringValue("_msdyn_contactvendor_value", this._msdyn_contactvendor_value);
        writer.writeStringValue("_msdyn_estimate_value", this._msdyn_estimate_value);
        writer.writeStringValue("_msdyn_estimatelineid_value", this._msdyn_estimatelineid_value);
        writer.writeStringValue("_msdyn_product_value", this._msdyn_product_value);
        writer.writeStringValue("_msdyn_project_value", this._msdyn_project_value);
        writer.writeStringValue("_msdyn_resourcecategory_value", this._msdyn_resourcecategory_value);
        writer.writeStringValue("_msdyn_salescontract_value", this._msdyn_salescontract_value);
        writer.writeStringValue("_msdyn_salescontractlineid_value", this._msdyn_salescontractlineid_value);
        writer.writeStringValue("_msdyn_task_value", this._msdyn_task_value);
        writer.writeStringValue("_msdyn_transactioncategory_value", this._msdyn_transactioncategory_value);
        writer.writeStringValue("_ownerid_value", this._ownerid_value);
        writer.writeStringValue("_owningbusinessunit_value", this._owningbusinessunit_value);
        writer.writeStringValue("_owningteam_value", this._owningteam_value);
        writer.writeStringValue("_owninguser_value", this._owninguser_value);
        writer.writeStringValue("_transactioncurrencyid_value", this._transactioncurrencyid_value);
        writer.writeObjectValue<Systemuser>("createdby", this.createdby);
        writer.writeDateValue("createdon", this.createdon);
        writer.writeObjectValue<Systemuser>("createdonbehalfby", this.createdonbehalfby);
        writer.writeNumberValue("exchangerate", this.exchangerate);
        writer.writeNumberValue("importsequencenumber", this.importsequencenumber);
        writer.writeObjectValue<Systemuser>("modifiedby", this.modifiedby);
        writer.writeDateValue("modifiedon", this.modifiedon);
        writer.writeObjectValue<Systemuser>("modifiedonbehalfby", this.modifiedonbehalfby);
        writer.writeObjectValue<Account>("msdyn_AccountCustomer", this.msdyn_AccountCustomer);
        writer.writeObjectValue<Account>("msdyn_AccountVendor", this.msdyn_AccountVendor);
        writer.writeNumberValue("msdyn_actchargeablebilledsalesamount", this.msdyn_actchargeablebilledsalesamount);
        writer.writeNumberValue("msdyn_actchargeablebilledsalesamount_base", this.msdyn_actchargeablebilledsalesamount_base);
        writer.writeNumberValue("msdyn_actchargeablebilledsalesquantity", this.msdyn_actchargeablebilledsalesquantity);
        writer.writeNumberValue("msdyn_actchargeablecostamount", this.msdyn_actchargeablecostamount);
        writer.writeNumberValue("msdyn_actchargeablecostamount_base", this.msdyn_actchargeablecostamount_base);
        writer.writeNumberValue("msdyn_actchargeablecostquantity", this.msdyn_actchargeablecostquantity);
        writer.writeNumberValue("msdyn_actchargeableunbilledsalesamount", this.msdyn_actchargeableunbilledsalesamount);
        writer.writeNumberValue("msdyn_actchargeableunbilledsalesamount_base", this.msdyn_actchargeableunbilledsalesamount_base);
        writer.writeNumberValue("msdyn_actchargeableunbilledsalesquantity", this.msdyn_actchargeableunbilledsalesquantity);
        writer.writeNumberValue("msdyn_actnochargebilledsalesamount", this.msdyn_actnochargebilledsalesamount);
        writer.writeNumberValue("msdyn_actnochargebilledsalesamount_base", this.msdyn_actnochargebilledsalesamount_base);
        writer.writeNumberValue("msdyn_actnochargebilledsalesquantity", this.msdyn_actnochargebilledsalesquantity);
        writer.writeNumberValue("msdyn_actnochargecostamount", this.msdyn_actnochargecostamount);
        writer.writeNumberValue("msdyn_actnochargecostamount_base", this.msdyn_actnochargecostamount_base);
        writer.writeNumberValue("msdyn_actnochargecostquantity", this.msdyn_actnochargecostquantity);
        writer.writeNumberValue("msdyn_actnochargeunbilledsalesamount", this.msdyn_actnochargeunbilledsalesamount);
        writer.writeNumberValue("msdyn_actnochargeunbilledsalesamount_base", this.msdyn_actnochargeunbilledsalesamount_base);
        writer.writeNumberValue("msdyn_actnochargeunbilledsalesquantity", this.msdyn_actnochargeunbilledsalesquantity);
        writer.writeNumberValue("msdyn_actnonchargeablecostamount", this.msdyn_actnonchargeablecostamount);
        writer.writeNumberValue("msdyn_actnonchargeablecostamount_base", this.msdyn_actnonchargeablecostamount_base);
        writer.writeNumberValue("msdyn_actnonchargeablecostquantity", this.msdyn_actnonchargeablecostquantity);
        writer.writeNumberValue("msdyn_actnonchargeableunbilledsalesamount", this.msdyn_actnonchargeableunbilledsalesamount);
        writer.writeNumberValue("msdyn_actnonchargeableunbilledsalesamount_base", this.msdyn_actnonchargeableunbilledsalesamount_base);
        writer.writeNumberValue("msdyn_actnonchargeableunbilledsalesquantity", this.msdyn_actnonchargeableunbilledsalesquantity);
        writer.writeObjectValue<Bookableresource>("msdyn_bookableresource", this.msdyn_bookableresource);
        writer.writeObjectValue<Contact>("msdyn_ContactCustomer", this.msdyn_ContactCustomer);
        writer.writeObjectValue<Contact>("msdyn_ContactVendor", this.msdyn_ContactVendor);
        writer.writeNumberValue("msdyn_customertype", this.msdyn_customertype);
        writer.writeDateValue("msdyn_documentdate", this.msdyn_documentdate);
        writer.writeNumberValue("msdyn_earnedrevenue", this.msdyn_earnedrevenue);
        writer.writeNumberValue("msdyn_earnedrevenue_base", this.msdyn_earnedrevenue_base);
        writer.writeDateValue("msdyn_enddate", this.msdyn_enddate);
        writer.writeNumberValue("msdyn_estchargeablebilledsalesamount", this.msdyn_estchargeablebilledsalesamount);
        writer.writeNumberValue("msdyn_estchargeablebilledsalesamount_base", this.msdyn_estchargeablebilledsalesamount_base);
        writer.writeNumberValue("msdyn_estchargeablebilledsalesquantity", this.msdyn_estchargeablebilledsalesquantity);
        writer.writeNumberValue("msdyn_estchargeablecostamount", this.msdyn_estchargeablecostamount);
        writer.writeNumberValue("msdyn_estchargeablecostamount_base", this.msdyn_estchargeablecostamount_base);
        writer.writeNumberValue("msdyn_estchargeablecostquantity", this.msdyn_estchargeablecostquantity);
        writer.writeNumberValue("msdyn_estchargeableunbilledsalesamount", this.msdyn_estchargeableunbilledsalesamount);
        writer.writeNumberValue("msdyn_estchargeableunbilledsalesamount_base", this.msdyn_estchargeableunbilledsalesamount_base);
        writer.writeNumberValue("msdyn_estchargeableunbilledsalesquantity", this.msdyn_estchargeableunbilledsalesquantity);
        writer.writeObjectValue<Msdyn_estimate>("msdyn_Estimate", this.msdyn_Estimate);
        writer.writeObjectValue<Msdyn_estimateline>("msdyn_estimatelineid", this.msdyn_estimatelineid);
        writer.writeNumberValue("msdyn_estnochargebilledsalesamount", this.msdyn_estnochargebilledsalesamount);
        writer.writeNumberValue("msdyn_estnochargebilledsalesamount_base", this.msdyn_estnochargebilledsalesamount_base);
        writer.writeNumberValue("msdyn_estnochargebilledsalesquantity", this.msdyn_estnochargebilledsalesquantity);
        writer.writeNumberValue("msdyn_estnochargecostamount", this.msdyn_estnochargecostamount);
        writer.writeNumberValue("msdyn_estnochargecostamount_base", this.msdyn_estnochargecostamount_base);
        writer.writeNumberValue("msdyn_estnochargecostquantity", this.msdyn_estnochargecostquantity);
        writer.writeNumberValue("msdyn_estnochargeunbilledsalesamount", this.msdyn_estnochargeunbilledsalesamount);
        writer.writeNumberValue("msdyn_estnochargeunbilledsalesamount_base", this.msdyn_estnochargeunbilledsalesamount_base);
        writer.writeNumberValue("msdyn_estnochargeunbilledsalesquantity", this.msdyn_estnochargeunbilledsalesquantity);
        writer.writeNumberValue("msdyn_estnonchargeablecostamount", this.msdyn_estnonchargeablecostamount);
        writer.writeNumberValue("msdyn_estnonchargeablecostamount_base", this.msdyn_estnonchargeablecostamount_base);
        writer.writeNumberValue("msdyn_estnonchargeablecostquantity", this.msdyn_estnonchargeablecostquantity);
        writer.writeNumberValue("msdyn_estnonchargeableunbilledsalesamount", this.msdyn_estnonchargeableunbilledsalesamount);
        writer.writeNumberValue("msdyn_estnonchargeableunbilledsalesamount_base", this.msdyn_estnonchargeableunbilledsalesamount_base);
        writer.writeNumberValue("msdyn_estnonchargeableunbilledsalesquantity", this.msdyn_estnonchargeableunbilledsalesquantity);
        writer.writeCollectionOfObjectValues<Annotation>("msdyn_fact_Annotations", this.msdyn_fact_Annotations);
        writer.writeCollectionOfObjectValues<Asyncoperation>("msdyn_fact_AsyncOperations", this.msdyn_fact_AsyncOperations);
        writer.writeCollectionOfObjectValues<Bulkdeletefailure>("msdyn_fact_BulkDeleteFailures", this.msdyn_fact_BulkDeleteFailures);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_fact_DuplicateBaseRecord", this.msdyn_fact_DuplicateBaseRecord);
        writer.writeCollectionOfObjectValues<Duplicaterecord>("msdyn_fact_DuplicateMatchingRecord", this.msdyn_fact_DuplicateMatchingRecord);
        writer.writeCollectionOfObjectValues<Mailboxtrackingfolder>("msdyn_fact_MailboxTrackingFolders", this.msdyn_fact_MailboxTrackingFolders);
        writer.writeCollectionOfObjectValues<Principalobjectattributeaccess>("msdyn_fact_PrincipalObjectAttributeAccesses", this.msdyn_fact_PrincipalObjectAttributeAccesses);
        writer.writeCollectionOfObjectValues<Processsession>("msdyn_fact_ProcessSession", this.msdyn_fact_ProcessSession);
        writer.writeCollectionOfObjectValues<Syncerror>("msdyn_fact_SyncErrors", this.msdyn_fact_SyncErrors);
        writer.writeStringValue("msdyn_factid", this.msdyn_factid);
        writer.writeNumberValue("msdyn_facttype", this.msdyn_facttype);
        writer.writeNumberValue("msdyn_grossmargin", this.msdyn_grossmargin);
        writer.writeNumberValue("msdyn_grossmargin_base", this.msdyn_grossmargin_base);
        writer.writeStringValue("msdyn_name", this.msdyn_name);
        writer.writeObjectValue<Product>("msdyn_Product", this.msdyn_Product);
        writer.writeObjectValue<Msdyn_project>("msdyn_Project", this.msdyn_Project);
        writer.writeObjectValue<Bookableresourcecategory>("msdyn_ResourceCategory", this.msdyn_ResourceCategory);
        writer.writeObjectValue<Salesorder>("msdyn_SalesContract", this.msdyn_SalesContract);
        writer.writeStringValue("msdyn_salescontractline", this.msdyn_salescontractline);
        writer.writeObjectValue<Salesorderdetail>("msdyn_SalesContractLineId", this.msdyn_SalesContractLineId);
        writer.writeDateValue("msdyn_startdate", this.msdyn_startdate);
        writer.writeObjectValue<Msdyn_projecttask>("msdyn_Task", this.msdyn_Task);
        writer.writeNumberValue("msdyn_totalcost", this.msdyn_totalcost);
        writer.writeNumberValue("msdyn_totalcost_base", this.msdyn_totalcost_base);
        writer.writeNumberValue("msdyn_totalhours", this.msdyn_totalhours);
        writer.writeObjectValue<Msdyn_transactioncategory>("msdyn_TransactionCategory", this.msdyn_TransactionCategory);
        writer.writeNumberValue("msdyn_transactionclassification", this.msdyn_transactionclassification);
        writer.writeNumberValue("msdyn_vendortype", this.msdyn_vendortype);
        writer.writeDateValue("overriddencreatedon", this.overriddencreatedon);
        writer.writeObjectValue<Principal>("ownerid", this.ownerid);
        writer.writeObjectValue<Businessunit>("owningbusinessunit", this.owningbusinessunit);
        writer.writeObjectValue<Team>("owningteam", this.owningteam);
        writer.writeObjectValue<Systemuser>("owninguser", this.owninguser);
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
